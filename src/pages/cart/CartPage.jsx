import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import casio from '../../assets/cartcasio.svg'
import montaine from '../../assets/cartmontaine.svg'
import { Link } from 'react-router-dom'

const CartPage = () => {
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


        <div className='md:py-[5rem] md:px-0 w-full  md:flex grid md:gap-5  justify-center'>
            <div className='w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg'>
                <h1 className='border-b w-full py-[2rem] border-[#94A3B8] md:text-2xl text-base font-semibold'>Item Summary</h1>

                <div className='py-[2rem] flex gap-[2rem] border-b border-[#94A3B8]'>
                    <img src={casio} alt="casio watch" className='border border-[#AC702F] rounded-md bg-transparent '/>

                    <div className='flex flex-col gap-5 '>
                        <h1 className='md:text-2xl text-sm font-semibold'>Casio CA-500WE-1AEF</h1>
                        <h2 className='md:text-2xl text-sm font-semibold'>N160,002</h2>
                        <div className='md:text-base text-xs'>
                            <button className='border border-[#AC702F] px-1 rounded-2xl'>
                                <span className='mr-2'>-</span>
                                1
                                <span className='ml-1'> +</span>
                            </button>
                        </div>
                        <p className='text-[#12DF00] d:text-base text-xs'>In Stock</p>
                    </div>
                </div>

                <div className='py-[2rem] flex gap-[2rem]'>
                    <img src={montaine} alt="casio watch" className='border px-2 border-[#AC702F] rounded-md bg-transparent '/>

                    <div className='flex flex-col gap-5 '>
                        <h1 className='md:text-2xl text-sm  font-semibold'>Mondaine Classic 40mm</h1>
                        <h2 className='md:text-2xl text-sm  font-semibold'>N160,002</h2>
                        <div className='d:text-base text-xs'>
                            <button className='border border-[#AC702F] px-1 rounded-2xl'>
                                <span className='mr-2'>-</span>
                                1
                                <span className='ml-1'> +</span>
                            </button>
                        </div>
                        <p className='text-[#12DF00] d:text-base text-xs'>In Stock</p>
                    </div>
                </div>
            </div>


            <div className='md:border border-none md:w-1/3  px-[2rem] border-white bg-white md:rounded-lg w-full'>
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
                    <span>N354,544</span>
                </div>
                <div className='mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs'>
                    <h2>Discount</h2>
                    <span>N00.00</span>
                </div>
                <div className=' flex justify-between text-[#0F172A] border-b border-[#94A3B8] py-[2rem] md:text-base text-xs'>
                    <h2>Shipping</h2>
                    <span>N00.00</span>
                </div>
                <div className='mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs'>
                    <h2>Total</h2>
                    <span>N354,544</span>
                </div>
                <Link to={'/checkoutpage'}>
                    <button className='w-full my-[2rem] border-[#AC702F] bg-[#AC702F] text-white md:py-2 py-3 rounded-xl md:text-base text-xs'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CartPage
