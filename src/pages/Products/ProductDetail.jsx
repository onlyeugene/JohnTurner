import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../stores/cart';
import rating from '../../assets/rating.svg';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`, {
          params: {
            organization_id: '8c5037428be7462db55476b9676f7488',
            Appid: 'OD1N0RO9VMTHTY7',
            Apikey: 'dc3ffc0905d44c69beea684bb189e2b920240712121331611680',
          },
        });
        if (response.data && response.data.items && response.data.items.length > 0) {
          setProduct(response.data.items[0]);
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  useEffect(() => {
    document.title = product ? product.name : 'Product Detail';
  }, [product]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center'>Error: {error.message}</p>;
  if (!product) return null;

  const imageUrl = `https://api.timbu.cloud/images/${product.photos[0]?.url}` || 'https://via.placeholder.com/150';
  const productPrice = product.current_price[0]?.NGN[0] || 'Price not available';

  return (
    <div className="product-detail-container md:px-[5rem] py-[4rem] px-[2rem] md:flex grid justify-center items-center">
      <div className='flex flex-col justify-center'>
        <img src={imageUrl} alt={`Image of ${product.name}`} className="md:w-[20rem] w-full" />
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <h2 className="text-xl text-gray-700">{product.unique_id}</h2>
        <p className="mt-4">{product.description || 'No description available'}</p>
        <h4 className="text-2xl font-semibold">N{productPrice}</h4>
        <div className="flex items-center">
          <img src={rating} alt="Rating" />
          <span>{product.number}</span>
        </div>
        <h5 className="mt-5">
          <span className="font-bold text-[#AC702F]">{product.available_quantity}</span> left in stock
        </h5>
      </div>
      
      <div className="product-images mt-5 flex flex-col justify-cente items-center gap-3">
        <h1 className='text-2xl font-semibold text-center pb-[2rem]'>Recommended</h1>
        {product.photos.map((photo, index) => (
          <img 
            key={index} 
            src={`https://api.timbu.cloud/images/${photo.url}`} 
            alt={`Image ${index + 1} of ${product.name}`} 
            className="inline-block mr-2 border py-2 px-2 rounded-xl border-[#AC702F]"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
