import logo from '../../assets/logo.svg'
import arrow from '../../assets/down_arrow.svg'
import search from '../../assets/search.svg'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
  const routesWithoutNavbar = ['/cartpage', "/checkoutpage"];
  const isNavbarVisible = !routesWithoutNavbar.includes(location.pathname);

  if (!isNavbarVisible) {
    return null;
  }


  return (
    <div className='w-full bg-[#f4f4f479] flex justify-between items-center md:px-[5rem] px-[2rem] py-[2rem] overflow-hidden cursor-pointer border-b border-[#f2f2f279]'>
        <div className='flex gap-10 items-center text-[16px] '>
        <Link to={'/'}>
            <img src={logo} alt="logo"/>
        </Link>


            <div className='md:flex items-center gap-1 hover:text-[#AC702F]  hidden'>
                <h1>Brands</h1>
                <span>
                    <img src={arrow} alt="this is an arrrow facing downwards" />
                </span>
            </div>

            <h2 className='hover:text-[#AC702F] md:block hidden'>Inspiration</h2>

            <div className='md:flex items-center gap-1 hover:text-[#AC702F] hidden'>
                <h3>Categroies</h3>
                <span> 
                    <img src={arrow} alt="this is an arrrow facing downwards" />
                </span>
            </div>

            <h4 className='hover:text-[#AC702F] md:block hidden'>Sale</h4>
        </div>

        <div className='md:border md:w-[8rem] rounded-lg py-1 px-4 border-[#E2E8F0] bg-transparent flex items-center gap-3'>
            <img src={search} alt="search icon" className='md:w-5 w-8 '/>
            <input type="text" placeholder='Search' className='w-full outline-none input-placeholder md:block hidden'/>
        <div className='md:hidden block'>
            <div className='border w-8 border-black rounded-full bg-black py-[.5px]'></div>
            <div className='border w-6 border-black py-[.5px] bg-black rounded-full my-1 ml-2'></div>
            <div className='border w-7 border-black bg-black rounded-full py-[.5px] my-1 ml-1'></div>
        </div>
        </div>

    </div>
  )
}

export default Navbar
