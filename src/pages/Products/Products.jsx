import { Link } from 'react-router-dom';
import arrow from '../../assets/down_arrow.svg';
import { products } from './ProductsDb';

const Products = () => {
  return (
    <div className='w-full flex flex-col gap-5 justify-center items-center md:px-[2rem] px-[1rem] py-[2rem] bg-[#f4f4f479] overflow-hidden'>
      <div className='flex justify-center items-center text-[16px] gap-5'>
        <div className='flex items-center gap-1'>
          <h1>Brands</h1>
          <img src={arrow} alt="arrow" />
        </div>

        <h2 className='border border-[#AC702F] bg-[#AC702F] text-white py-1 px-3 rounded-full'>Inspiration</h2>

        <div className='flex items-center gap-1'>
          <h3>Categories</h3>
          <img src={arrow} alt="arrow" />
        </div>
      </div>

      <h1 className='text-[#0F172A] text-[32px] font-semibold text-center'>Explore beautiful Inspiration from our Watch Collection</h1>

        <div className='About md:w-[80rem] w-[20rem] md:justify-center md:gap-[5.5rem] gap-[1.5rem]'>
          <p className='border py-[.4rem] rounded-lg border-[#0F172A] px-4'>All</p>
          <p>Casio</p>
          <p>Seiko</p>
          <p>Rolex</p>
          <p>Richard Millie</p>
          <p>Timex</p>
          <p>Mondaine</p>
          <p>Hauer</p>
        </div>

      <div className='w-full grid md:grid-cols-4 grid-cols-2 gap-5'>
        {products.map((product) => (
          <div key={product.id} className='w-full border border-[#AC702F] py-2 px-[1rem] rounded-lg'>
            <div className='flex items-center justify-center'>
              <img src={product.Image} alt={product.model} className='w-full ' />
            </div>

            <h1 className='md:text-lg text-sm font-semibold mt-4'>{product.type}</h1>

            <h2 className='md:text-base text-sm text-[#334155] mt-2 text-nowrap md:text-clip truncate'>{product.model}</h2>

            <p className='md:text-md text-sm text-[#94A3B8] mt-2 break-all md:text-nowrap truncate md:text-xlip'>{product.description}</p>
            
            <h4 className='md:text-2xl text-xl font-semibold text-[#0F172A]'>{product.price}</h4>

            <div className='flex items-center gap-2'>
              <img src={product.rating} alt="rating" className='md:w-[7rem] w-[5rem] h-5' />
              <p className='md:text-base text-xs text-[#334155]'>{product.Number}</p>
            </div>

            <h5 className='md:text-sm text-xs text-gray-500 mt-5'><span className='font-bold text-[#AC702F]'>{product.stock}</span> left in stock</h5>
            
            <div className='md:flex grid  mt-2 md:gap-[.2rem] gap-2'>
              <button className='border border-[#AC702F] md:text-base md:block hidden text-xs md:py-1 md:px-[.8px] rounded-lg'>
                <span>- </span>
                0
                <span> +</span>
              </button>
              <Link to={'/cartpage'} className='border text-center md:text-base text-xs rounded-2xl md:py-1 py-1.5  md:px-2 bg-[#AC702F] border-[#AC702F] text-white'>Add to Cart
              </Link>
              <Link to={'/checkoutpage'} className='border md:text-base text-xs text-center border-[#AC702F] md:py-1 py-1.5 md:px-1 rounded-2xl'>Buy now
              </Link>
            </div>
          </div>
        ))}
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
}

export default Products;
