import { Link } from 'react-router-dom'
import cart from '../../../assets/cart.svg'

const Hero = () => {
  return (
    <div className='w-full bg-[#fdfdfd] overflow-hidden'>
      <Link to={'/cartpage'} className='flex justify-end md:px-[5rem] py-[2rem] gap-2 text-[16px] items-center relative'>
        <img src={cart} alt="this is an image of a cart" className=''/>
        <h1>Cart</h1>
        <span className='absolute mb-6 mx-[3.5rem] rounded-full border-[#FF0000] border bg-[#FF0000] text-white py-.7 px-1.5  text-[13px] '>2</span>
      </Link>

      <div className='hero-bg text-white py-[2rem]  flex flex-col justify-center items-center gap-6'>
          <h1 className='text-[64px] text-center font-bold'>How To Wear A Watch <br /> The Right Way</h1>
          <button className='text-[19.09px] button'>Read more</button>
      </div>
    </div>
  )
}

export default Hero
