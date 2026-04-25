import React, { useState } from 'react';

import Links from './Links';
import { CircleX, Menu } from 'lucide-react';

const navData = [
  {
    id: 1,
    name: "Products",
    path: "/",
    
  },
  {
    id: 2,
    name: "Features",
    path: "/Features",
     
  },
  {
    id: 3,
    name: "Pricing",
    path: "/Pricing",
     
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/Testimonials",
     
  },
  {
    id: 5,
    name: "FAQ",
    path: "/FAQ",
    
  }
];

const Navbar = ({ cartCount}) => {

  const [open, setOpen] = useState(false)

  const links = navData.map(route => <Links key={route.id} route={route}></Links>)



  return (

    <nav className='fixed w-full z-5 top-0 bg-white'>
      <div className='flex justify-between  my-5 p-5 shadow-md'>
        <span className='flex gap-4 justify-center items-center'
          onClick={() => setOpen(!open)}>
          {open ? <CircleX className='md:hidden'>
          </CircleX> : <Menu className='md:hidden'></Menu>}
          <ul className={`md:hidden absolute duration-400 ${open ? 'top-20' : '-top-80'} bg-blue-400 rounded-sm p-4 font-bold text-[16px]`}>
            
            {
              links
             
            }
            <div>
               <div className='p-3 hover:bg-white px-1 py-0.5'> <button className='font-bold text-black'>Login</button></div>
              <button className='btn'>Get Started</button>
              </div>
          </ul>

          <h2 className='font-medium  md:text-xl md:font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
        </span>

        <ul className='md:flex hidden text-[#101727] font-semibold text-[16px] justify-center items-center'>
          {
            links
          }
        </ul>


        <div className='flex gap-5 mx-5 justify-center items-center'>
          <div className='relative'>
              <img src="/src/assets/shopping-cart.png" className='w-8' alt="" />
            {
              cartCount > 0 && (
                <span className='absolute -top-1.5 -right-1 text-white bg-red-600 px-1 py-0.05 rounded-full opacity-90'>
                  {cartCount}
                </span>
              )
            }
          </div>
          <button className='hidden md:block text-[#101727] font-medium md:font-bold'>Login</button>
          <button className='btn btn-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full hidden md:block'>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;