import { Link } from "react-router-dom";
// import arrow from "../../assets/down_arrow.svg";
import ProductsCard from "./ProductsCard";
import { products } from "./ProductsDb";

const Products = () => {

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center md:px-[2rem] px-[1rem] py-[2rem] bg-[#f4f4f479] overflow-hidden">
      <div className="flex justify-center items-center text-[16px] gap-5">
        {/* <div className="flex items-center gap-1">
          <h1>Brands</h1>
          <img src={arrow} alt="arrow" />
        </div>

        <h2 className="border border-[#AC702F] bg-[#AC702F] text-white py-1 px-3 rounded-full">
          Inspiration
        </h2>

        <div className="flex items-center gap-1">
          <h3>Categories</h3>
          <img src={arrow} alt="arrow" />
        </div> */}
      </div>

      <h1 className="text-[#0F172A] text-[32px] font-semibold text-center">
        Explore beautiful Inspiration from our Watch Collection
      </h1>

      <div className="About md:w-[80rem] w-[20rem] md:justify-center md:gap-[5.5rem] gap-[1.5rem]">
        <p className="border py-[.4rem] rounded-lg border-[#0F172A] px-4">
          All
        </p>
        <p>Casio</p>
        <p>Seiko</p>
        <p>Rolex</p>
        <p>Richard Millie</p>
        <p>Timex</p>
        <p>Mondaine</p>
        <p>Hauer</p>
      </div>
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-7 container">
        {products.map((product, key) => 
        <ProductsCard key={key} data={product} />
        )}
      </div>

      
      {/* <div className='grid md:grid-cols-4 grid-cols-2 gap-5 '>
        {products.map((product) =>(
          <div key={product.key} className='border-[1px] border-[#AC702F] rounded-lg'>
            <div className='flex justify-center items-center'>
              <img src={product.Image} alt="" className=' py-3'/>
            </div>

            <h1 className='px-3 md:text-lg text-sm font-semibold'>{product.type}</h1>
            <h2 className='px-3 md:text-base text-sm text-[#334155] text-nowrap md:text-clip truncate'>{product.model}</h2>
            <h3 className='px-3 md:text-base text-sm text-[#94A3B8] mt-4 break-all'>{product.description}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Products;
