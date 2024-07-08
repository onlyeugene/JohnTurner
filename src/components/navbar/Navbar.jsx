import logo from '../../assets/logo.svg';
import arrow from '../../assets/down_arrow.svg';
import search from '../../assets/search.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const routesWithoutNavbar = ['/cartpage', "/checkoutpage"];
  const isNavbarVisible = !routesWithoutNavbar.includes(location.pathname);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [openModal, setModalOpen] = useState(false)

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     closeOtherDropdowns('Brands');


//     if (!isModalOpen) {
//         document.body.classList.add("modal-open");
//     } else {
//         document.body.classList.remove("modal-open");
//     }
// };
// const toggleModalOpen = () => {
//     setModalOpen(!openModal);
//     closeOtherDropdowns('Categories');


//     if (!openModal) {
//       document.body.classList.add("modal-open");
//     } else {
//       document.body.classList.remove("modal-open");
//     }
//   };

const [isModalOpen, setIsModalOpen] = useState(false);
const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    closeOtherDropdowns('Brands');
};

const [openModal, setModalOpen] = useState(false);
const toggleModalOpen = () => {
    setModalOpen(!openModal);
    closeOtherDropdowns('Categories');
};


  const closeOtherDropdowns = (currentDropdown) => {
    const dropdowns = ['Brands', 'Categories'];
    dropdowns.forEach((dropdown) => {
        if (dropdown !== currentDropdown) {
            switch (dropdown) {
                case 'Brands':
                    setIsModalOpen(false);
                    break;
                case 'Categories':
                    setModalOpen(false);
                    break;
            }
        }
    });
};

  if (!isNavbarVisible) {
    return null;
  }

  return (
    <div className='relative w-full mx-auto bg-[#f4f4f479] flex justify-between items-center md:px-[5rem] px-[2rem] py-[2rem] gap-10  overflow-hidden cursor-pointer border-b border-[#f2f2f279]'>
      <div className='flex gap-10 items-center text-[16px]'>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

        <div className='md:flex items-center gap-1 hover:text-[#AC702F] hidden' onClick={toggleModal}>
          <h1>Brands</h1>
          <span>
            <img src={arrow} alt="this is an arrow facing downwards" />
          </span>
        </div>

        <h2 className='hover:text-[#AC702F] md:block hidden'>Inspiration</h2>

        <div className='md:flex items-center gap-1 hover:text-[#AC702F] hidden' onClick={toggleModalOpen}>
          <h3>Categories</h3>
          <span>
            <img src={arrow} alt="this is an arrow facing downwards" />
          </span>
        </div>

        <h4 className='hover:text-[#AC702F] md:block hidden'>Sale</h4>
      </div>

      <div className='md:border md:w-[8rem] rounded-lg py-1 px-4 border-[#E2E8F0] bg-transparent flex items-center gap-3'>
        <img src={search} alt="search icon" className='md:w-5 w-8' />
        <input type="text" placeholder='Search' className='w-full outline-none input-placeholder md:block hidden' />
        <div className='md:hidden block'>
          <div className='border w-8 border-black rounded-full bg-black py-[.5px]'></div>
          <div className='border w-6 border-black py-[.5px] bg-black rounded-full my-1 ml-2'></div>
          <div className='border w-7 border-black bg-black rounded-full py-[.5px] my-1 ml-1'></div>
        </div>
      </div>

      


      {isModalOpen && (
        <>
          <div className='fixed inset-0 bg-black opacity-50 z-10 mt-[5rem] md:block hidden' onClick={toggleModal}></div>
          <div className='fixed top-0 left-0 mx-[35rem] my-[6rem] px-[2rem] py-[2rem] w-[44rem] transform -translate-x-1/2 z-20 bg-white rounded-xl shadow-lg overflow-hidden md:block hidden'>
            <div className='py-3 px-6 flex gap-12'>
              <div className='text-[#0F172A]'>
                <h1 className='font-semibold'>Luxury Brands</h1>
                <ul className='list-disc px-6'>
                  <li>Montblanc</li>
                  <li>Buame & Mercer</li>
                  <li>Oris</li>
                  <li>Rado</li>
                  <li>Fortis</li>
                  <li>Raymond Weil</li>
                  <li>Roamer</li>
                  <li>Richard Millie</li>
                  <li>Hauer</li>
                  <li>Seiko</li>
                  <li>Tissot</li>
                  <li>Maurice</li>
                  <li>Lorus</li>
                  <li>Timex</li>
                  <li>Certina</li>
                  <li>Rolex</li>
                  <li>Balmain</li>
                </ul>
              </div>
              <div className='text-[#0F172A]'>
                <h1 className='font-semibold'>Designer Watch Brands</h1>
                <ul className='list-disc px-6'>
                  <li>Vivienne Westwood</li>
                  <li>Versace</li>
                  <li>Casio</li>
                  <li>Diesel</li>
                  <li>Emporio Armani</li>
                  <li>Ligure</li>
                  <li>Fossil</li>
                  <li>Guess</li>
                  <li>Maserati</li>
                  <li>Rotary</li>
                  <li>Sekonda</li>
                  <li>Swatch</li>
                  <li>Mondaine</li>
                  <li>Icewatch</li>
                  <li>Calypso</li>
                  <li>Garonne</li>
                </ul>
              </div>
              <div className='text-[#0F172A]'>
                <h1 className='font-semibold'>Luxury Jewellery</h1>
                <ul className='list-disc px-6'>
                  <li>Ambush</li>
                  <li>Balenciaga</li>
                  <li>Common Lines</li>
                  <li>Dsquared2</li>
                  <li>Juicy Couture</li>
                  <li>Michael Kors</li>
                  <li>Missoma</li>
                  <li>Olivia Burton</li>
                  <li>Radley</li>
                  <li>Swarovski</li>
                  <li>Ted Baker</li>
                  <li>Tory Bunch</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {openModal &&(
        <>
        <div className='fixed inset-0 bg-black opacity-50 z-10  mt-[5rem] md:block hidden' onClick={toggleModalOpen}></div>
          <div className='fixed top-0 left-0 mx-[37rem] my-[6rem] px-[1rem] py-[1rem] w-[17rem] transform -translate-x-1/2 z-20 bg-white rounded-xl shadow-lg overflow-hidden md:block hidden'>
            <div className='py-3 px-6 gap-12 font-semibold'>
                <h1>Luxury Brands</h1>  
                <h2>Designer Watch Brands</h2>
                <h3>Luxury Jewellery</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
