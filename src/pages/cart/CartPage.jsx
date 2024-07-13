import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import { removeFromCart, updateQuantity, clearCart } from "../../stores/cart";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleMinusQuantity = (id) => {
    dispatch(updateQuantity({ productId: id, quantity: -1 }));
  };

  const handlePlusQuantity = (id) => {
    dispatch(updateQuantity({ productId: id, quantity: 1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  
  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  if (cartItems.length === 0) {
    return (
      <div className='w-full md:px-[5rem] bg-[#f4f4f479] overflow-hidden'>
        <div className='flex justify-between md:px-0 px-[2rem] py-[2rem]'>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
          <div className='flex items-center gap-1'>
            <img src={cart} alt="this is an image of a cart" className=''/>
            <h1>Cart</h1>
            <span className='absolute mb-6 mx-[-.5rem] rounded-full border-[#FF0000] border bg-[#FF0000] text-white py-.7 px-1.5 text-[13px]'>{totalQuantity}</span>
          </div>
        </div>
        <div className="text-center py-[10rem]">
        <h2 className='pb-[2rem] text-5xl '>Your cart is empty</h2>
          <Link to={'/'}>
              <p className="underline text-[#AC702F]">back to products</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full md:px-[5rem] bg-[#f4f4f479] overflow-hidden'>
      <div className='flex justify-between md:px-0 px-[2rem] py-[2rem]'>
        <Link to={'/'}>
          <img src={logo} alt="logo"/>
        </Link>
        <div className='flex items-center gap-1'>
          <img src={cart} alt='cart' />
          <h1 className='text-[#334155]'>Cart</h1>
        </div>
      </div>

      <div className='md:py-[3rem] md:px-0 w-full h-full md:flex grid md:gap-5 justify-center'>
        <div className='w-full justify-center md:border border-none py-[3rem] px-[2rem] border-white bg-white md:rounded-lg'>
          <h1 className='border-b w-full py-[1rem] border-[#94A3B8] md:text-2xl text-base font-semibold'>Item Summary</h1>

          {cartItems.map((item) => (
            <div key={item.productId} className='py-[2rem] flex gap-[2rem] border-b border-[#94A3B8]'>
              <img src={item.image} alt={item.model} className='border border-[#AC702F] rounded-md bg-transparent w-full'/>
              <div className='flex flex-col gap-5 '>
                <h1 className='md:text-2xl text-sm font-semibold'>{item.name} {item.unique_id}</h1>
                <h2 className='md:text-2xl text-sm font-semibold'>N{item.price * item.quantity}</h2>
                <div className='md:text-base text-xs'>
                  <button className='border border-[#AC702F] px-1 rounded-2xl'>
                    <span className='mr-2' onClick={() => handleMinusQuantity(item.productId)}>-</span>
                    {item.quantity}
                    <span className='ml-1' onClick={() => handlePlusQuantity(item.productId)}> +</span>
                  </button>
                </div>
                <p className='text-[#12DF00] d:text-base text-xs'>In Stock</p>
                <button 
                  className='text-red-500 md:text-sm text-xs md:pr-[25rem] pr-[15rem]' 
                  onClick={() => handleRemoveItem(item.productId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='md:border border-none md:w-1/3 px-[2rem] border-white h-[40rem] bg-white md:rounded-lg w-full'>
          <div className='py-[2rem]'>
            <h1 className='w-full md:text-2xl text-base font-semibold'>Delivery</h1>
            <p className='text-[#0F172A] md:text-base text-xs mt-2'>July 13, 2024, 3:00pm - 5:00pm</p>
          </div>
          <div className='flex gap-5 items-center'>
            <div className='md:w-[20rem] w-[14rem]'>
              <input type="text" placeholder='Discount code or gift card' className='w-full border border-[#AC702F] input-place md:px-2 md:py-1 px-3 py-2 rounded-xl outline-none md:text-base text-xs'/>
            </div>
            <button className='border-[#AC702F] border rounded-xl md:py-1 md:px-6 py-2 px-6 bg-[#AC702F] text-white md:text-base text-xs'>Apply</button>
          </div>

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
          <Link to={'/checkoutpage'}>
            <button className='w-full mt-[2rem] border-[#AC702F] bg-[#AC702F] text-white md:py-2 py-3 rounded-xl md:text-base text-xs'>Proceed to Checkout</button>
          </Link>
          <button 
            className='w-full mt-[1rem] border-[#AC702F] bg-[#FF0000] text-white md:py-2 py-3 rounded-xl md:text-base text-xs' 
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
