import mail from '../../assets/mail.svg'
import check from '../../assets/check.svg'
import gpay from '../../assets/gpay.svg'
import visa from '../../assets/visa.svg'
import paypal from '../../assets/paypal.svg'
import master from '../../assets/master.svg'
import stripe from '../../assets/stripe.svg'
import amazon from '../../assets/amzon.svg'
import apple from '../../assets/apple.svg'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import insta from '../../assets/insta.svg'
import x from '../../assets/x.svg'
import linked from '../../assets/linked.svg'

const Footer = () => {
  return (
    <div className='bg-white w-full text-white'>
        <div className='bg-[#0F172A]'>
            <div className='md:flex px-[.6rem] py-[2rem] gap-10 justify-center md:flex-row flex flex-col items-center border-b'>
                <div className='flex gap-10'>
                    <img src={mail} alt="" />
                    <h1 className='uppercase py-1'>Sign up for 10% yout first order* - t&c's apply  
                        <span className='py-1 underline'> (privacy policy)</span>
                    </h1>
                </div>
                <div className='flex relative'>
                    <input type="text" placeholder='Email Address....' className=' input-placeholder py-1 rounded-2xl px-3'/>
                    <img src={check} alt="" className='absolute right-0 border py-[3px] px-2 rounded-r-2xl bg-[#0F172A]'/>
                </div>
            </div>
            <div className='md:flex grid-cols-2 grid px-[2rem] justify-center py-[2rem] md:gap-[5rem]'>
                <div>
                    <h1 className='font-semibold'>JOHN TURNER</h1>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Store</p>
                    <p>Appointments</p>
                    <p>Store Locator </p>
                    <p>Map</p>
                    <p>Site Map</p>
                </div>
                <div>
                    <h1 className='font-semibold'>YOUR ORDER</h1>
                    <p>Delivery</p>
                    <p>Information</p>
                    <p>Returns &</p>
                    <p>Exchanges</p>
                    <p>Payment Options</p>
                    <p>Privacy Policy</p>
                    <p>Acceptable Use</p>
                    <p>Policy</p>
                    <p>Cookie Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Terms of Use</p>
                </div>
                <div>
                    <h1 className='font-semibold'>OFFER & SERVICES</h1>
                    <p>Brand</p>
                    <p>Inspiration</p>
                    <p>Categories</p>
                    <p>Sales</p>
                    <p>Gift Vouchers</p>
                    <p>Insurance Information</p>
                </div>
            </div>
        </div>
        <div className='md:flex md:flex-row flex flex-col gap-5 items-center justify-center  py-[1rem] px-[2rem]'>
            <div className='flex gap-5 items-center'>
                <img src={gpay} alt="" />
                <img src={visa} alt="" />
                <img src={paypal} alt="" />
                <img src={master} alt="" />
            </div>
            <div className='flex gap-5 items-center'>
                <img src={stripe} alt="" />
                <img src={apple} alt="" />
                <img src={amazon} alt="" />
            </div>
        </div>

        <div className='px-[2rem]'>
            <div className='md:flex md:flex-row flex gap-8 md:gap-0 flex-col justify-center md:justify-between items-center px-[3rem] py-[2rem]'>
                <img src={logo} alt="" />
                
                <div className='text-[#0F172A] md:flex gap-5 md:flex-row flex flex-col items-center'>
                    <p>Terms of service</p>
                    <p>Privacy Policy</p>
                    <p>Contact us</p>
                </div>

                <div className='flex gap-5'>
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={x} alt="" />
                    <img src={linked} alt="" />
                </div>
            </div>
            <div className='border-b w-full'>
            </div>
        </div>
        <div className='text-center py-[2rem]'>
            <h1 className='text-black'>&copy; 2024 John Turner, Inc. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer
