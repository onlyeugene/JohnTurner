import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import ProductsCard from './ProductsCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../stores/cart';
import arrow from '../../assets/down_arrow.svg';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('All');

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axiosInstance.get('/products', {
          params: {
            organization_id: '8c5037428be7462db55476b9676f7488',
            reverse_sort: false,
            size: 30, 
            Appid: 'OD1N0RO9VMTHTY7',
            Apikey: 'dc3ffc0905d44c69beea684bb189e2b920240712121331611680',
          },
        });
        if (response.data && Array.isArray(response.data.items)) {
          setAllProducts(response.data.items);
        } else {
          setAllProducts([]);
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (selectedBrand === 'All') {
      const fetchProductItems = async () => {
        try {
          setLoading(true);
          const response = await axiosInstance.get('/products', {
            params: {
              organization_id: '8c5037428be7462db55476b9676f7488',
              reverse_sort: false,
              page,
              size: 10,
              Appid: 'OD1N0RO9VMTHTY7',
              Apikey: 'dc3ffc0905d44c69beea684bb189e2b920240712121331611680',
            },
          });
          if (response.data && Array.isArray(response.data.items)) {
            setProducts(response.data.items);
          } else {
            setProducts([]);
            console.error('Unexpected response format:', response.data);
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchProductItems();
    } else {
      setProducts(allProducts.filter(product => product.name.includes(selectedBrand)));
    }
  }, [page, selectedBrand, allProducts]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePreviousPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    if (brand !== 'All') setPage(1); // Reset to page 1 when a brand is selected
  };

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center md:px-[2rem] px-[1rem] py-[2rem] bg-[#f4f4f479] overflow-hidden">
      <div className="flex justify-center items-center text-[16px] gap-5">
        <div className="flex items-center gap-1">
          <h1>Brands</h1>
          <img src={arrow} alt="arrow" />
        </div>

        <h2 className="border border-[#AC702F] bg-[#AC702F] text-white py-1 px-3 rounded-full">
          Inspiration
        </h2>

        <div className="flex items-center gap-1">
          <h3>Categories</h3>
          <img src={arrow} alt="arrow" />
        </div>
      </div>

      <h1 className="text-[#0F172A] text-[32px] font-semibold text-center">
        Explore beautiful Inspiration from our Watch Collection
      </h1>

      <div className="About md:w-full w-[20rem] md:justify-center md:gap-[4rem] gap-[1.5rem] flex ">
        {['All', 'Casio', 'Seiko', 'Rolex', 'Richard Millie', 'Timex', 'Mondaine', 'Hauer'].map(brand => (
          <p
            key={brand}
            className={`border py-[.4rem] rounded-lg border-[#0F172A] px-4 cursor-pointer ${selectedBrand === brand ? 'bg-[#AC702F] text-white' : ''}`}
            onClick={() => handleBrandClick(brand)}
          >
            {brand}
          </p>
        ))}
      </div>

      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-7 md:px-[2rem] px-[2rem] container">
        {products.length > 0 ? (
          products.map((product) => {
            const imageUrl = `https://api.timbu.cloud/images/${product.photos[0]?.url}` || 'https://via.placeholder.com/150';
            return (
              <ProductsCard
                key={product.id}
                product={product}
                handleAddToCart={() => dispatch(addToCart({
                  productId: product.id,
                  image: imageUrl,
                  name: product.name,
                  unique_id: product.unique_id,
                  price: product.current_price[0].NGN[0],
                  quantity: 1,
                }))}
              />
            );
          })
        ) : (
          <p>No Products Found</p>
        )}
      </div>

      {selectedBrand === 'All' && (
        <div className="pagination flex gap-[2rem]">
          <div onClick={handlePreviousPage} disabled={page === 1}>
            <button>
              <span>&#60;&#60; </span>
              Previous
            </button>
          </div>
          <div onClick={handleNextPage}>
            <button>
              Next
              <span> &#62;&#62;</span>
            </button>
          </div>
        </div>
      )}

      <a href="#products">
        <button className='border bg-[#AC702F] border-[#AC702F] text-white md:py-2 md:px-4 py-1 px-2 md:text-base text-xs rounded-md flex justify-end items-end'>BACK TO TOP</button>
      </a>
    </div>
  );
};

export default Products;
