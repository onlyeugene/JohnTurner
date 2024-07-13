import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cart from '../../../assets/cart.svg';

const Hero = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [carts]);

  return (
    <div className='w-full bg-[#fdfdfd] overflow-hidden'>
      <div className='flex justify-end md:px-[5rem] w-full px-[2rem] py-[2rem] gap-2 items-center text-[16px] relative'>
        <Link to={'/cartpage'} className='flex items-center gap-2 cart-click'>
          <img src={cart} alt="this is an image of a cart" className=''/>
          <h1>Cart</h1>
          <span className='absolute mb-6 md:mx-[8.5rem] mx-[5.5rem] right-0  rounded-full border-[#FF0000] border bg-[#FF0000] text-white py-0.7 px-1.5 text-[13px]'>{totalQuantity}</span>
        </Link>
      </div>

      <div className='hero-bg text-white py-[2rem] flex flex-col justify-center items-center gap-6'>
        <h1 className='text-[64px] text-center font-bold'>How To Wear A Watch <br /> The Right Way</h1>
        <button className='text-[19.09px] button'>Read more</button>
      </div>
    </div>
  );
}

export default Hero;

