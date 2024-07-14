import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.svg';
import casio from '../../assets/cartcasio.svg';
import montaine from '../../assets/cartmontaine.svg';
import polygon from '../../assets/polygon.svg';
import ups from '../../assets/ups.svg';
// import visa from '../../assets/visa.svg'
import { removeFromCart, updateQuantity } from "../../stores/cart";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');

  const handleMinusQuantity = (id) => {
    dispatch(updateQuantity({ productId: id, quantity: -1 }));
  };

  const handlePlusQuantity = (id) => {
    dispatch(updateQuantity({ productId: id, quantity: 1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !address || !country || !cardName || !cardNumber || !expiration || !cvv) {
      toast.error('Please fill in all fields.');
    } else {
      toast.success('Order has been received!');
      // setTimeout(() => {
      //   navigate('/');
      // }, 10000);
    }
  };

  return (
    <div className='w-full md:px-[5rem] py-0 px-0 md:py-[2rem] bg-[#f4f4f479] overflow-hidden'>
      <Link to={'/'}>
        <img src={logo} alt="logo" className='md:px-0 md:py-0 px-[2rem] py-[1rem]'/>
      </Link>
      <div className='md:flex grid gap-10 w-full'>
        <div className='md:py-[5rem] md:px-0 w-full grid md:gap-10'>
          <div className='w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg'>
            <h1 className='border-b w-full py-[2rem] border-[#94A3B8] md:text-2xl text-base font-semibold'>Item Summary</h1>
            
            {cartItems.map((item) => (
              <div key={item.productId} className='py-[2rem] flex gap-[2rem] border-b border-[#94A3B8]'>
                <img src={item.image} alt={item.name} className='border border-[#AC702F] rounded-md bg-transparent md:w-[30rem] w-[9rem] md:h-auto h-[9rem]' />
                <div className='flex flex-col gap-5'>
                  <h1 className='md:text-2xl text-sm font-semibold'>{item.name}</h1>
                  <h2 className='md:text-2xl text-sm font-semibold'>N{item.price * item.quantity}</h2>
                  <div className='md:text-base text-xs'>
                    <button className='border border-[#AC702F] px-1 rounded-2xl'>
                      <span className='mr-2' onClick={() => handleMinusQuantity(item.productId)}>-</span>
                      {item.quantity}
                      <span className='ml-1' onClick={() => handlePlusQuantity(item.productId)}> +</span>
                    </button>
                  </div>
                  <p className='text-[#12DF00] d:text-base text-xs'>In Stock</p>
                  <button className='text-red-500 md:text-sm text-xs md:pr-[25rem] pr-[15rem]' onClick={() => handleRemoveItem(item.productId)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className='w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg'>
            <h1 className='w-full py-[2rem] md:text-2xl text-base font-semibold'>Delivery Address</h1>

            <div className='pb-[3rem]'>
              <input 
                type="text" 
                placeholder='First Name' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='pb-[3rem]'>
              <input 
                type="text" 
                placeholder='Last Name' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[.5rem]'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='pb-[3rem]'>
              <input 
                type="text" 
                placeholder='Address' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='pb-[3rem] flex items-center relative'>
              <input 
                type="text" 
                placeholder='Country' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <div className='absolute right-0 pr-5'>
                <img src={polygon} alt="polygon" className=''/>
              </div>
            </div>
          </div>
        </div>

        <div className='md:py-[5rem] md:w-2/3 w-full flex flex-col md:gap-10'>
          <div className='w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg'>
            <h1 className='border-b w-full py-[2rem] border-[#94A3B8] md:text-2xl text-base font-semibold'>Shipping Option</h1>

            <div className='flex md:text-lg text-base font-semibold gap-1 py-5 px-2 items-center justify-between'>
              <div className='flex gap-2'>
                <img src={ups} alt="ups" />
                <span className='text-[#0F172A]'>UPS</span>
              </div>
              <div>
                {/* <img src={polygon} alt="" /> */}
              </div>
            </div>
            <div className='px-10 pb-7 flex flex-col gap-5'>
              <p className='md:text-base text-xs'>July 13, 2024, 3:00pm - 5:00pm</p>
              <span className='text-[#0F172A] md:text-base text-xs font-semibold'>Free</span>
            </div>
          </div>

          <div className='w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg'>
            <h1 className='w-full py-[2rem] md:text-2xl text-base font-semibold'>Payment Details</h1>

            <div className='pb-[3rem]'>
              <input 
                type="text" 
                placeholder='Enter Name on Card' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]'
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            <div className='pb-[3rem] relative'>
              <input 
                type="text" 
                placeholder='Card Number' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <div className='flex right-0 pt-5 top-0 absolute'>
                {/* <img src={visa} alt="" className='md:w-11 w-10'/> */}
                {/* <img src={polygon} alt="" /> */}
              </div>
            </div>

            <div className='pb-[2rem] flex gap-5'>
              <input 
                type="text" 
                placeholder='Expiration' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]'
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='CVV' 
                className='outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]'
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>

            <h1 className='text-[#0F172A] mb-[2rem] md:text-base text-xs'>By Clicking "Confirm Payment" I agree to the companies term of services.</h1>

            <div className='mt-[4rem] flex justify-between text-[#0F172A] md:text-base text-xs'>
              <h2>Subtotal</h2>
              <span>N{subtotal}</span>
            </div>
            <div className='mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs'>
              <h2>Discount</h2>
              <span>N00.00</span>
            </div>
            <div className='flex justify-between text-[#0F172A] border-b border-[#94A3B8] py-[2rem] md:text-base text-xs'>
              <h2>Shipping</h2>
              <span>N00.00</span>
            </div>
            <div className='mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs'>
              <h2>Total</h2>
              <span>N{total}</span>
            </div>
            <button 
              className='w-full my-[2rem] border-[#AC702F] bg-[#AC702F] text-white md:py-2 py-3 rounded-xl md:text-base text-xs'
              onClick={handleSubmit}
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CheckoutPage;
