import React from 'react';
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { MdOutlineFacebook } from 'react-icons/md';

const Footer = () => {
  return (
      <footer className='bg-[#101727] text-white p-4 md:p-15'>
           <div className='  grid md:grid-cols-5 gap-8'>
               <div className='text-center'>
                  <span className='text-xl font-bold'>DigiTools</span>
                  <p className='text-gray-400 mt-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
               </div>
               <div className='text-center'>
                   <h3 className='font-extrabold mb-2 '>Product</h3>
                    <ul className='space-y-3 text-gray-400'>
                      <li><a href="#">Integrations</a></li>
                      <li><a href="#">Templates</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Features</a></li>
                    </ul>
               </div>
               <div className='3 text-center'>
                    <h5 className='font-extrabold mb-2'>Company</h5>
                    <ul className='text-gray-400 space-y-3'>
                  <li><a href="/About">About</a></li>
                  <li><a href="/Blog">Blog</a></li>
                  <li><a href="/Careers">Careers</a></li>
                  <li><a href="/Press">Press</a></li>
                 </ul>
               </div>
               <div className='4 text-center'>
                   <h6 className='font-extrabold mb-2'>Resources</h6>
                 <ul className='text-gray-400 space-y-3'>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="/Help Center">Help Center</a></li>
                  <li><a href="/Community">Community</a></li>
                  <li><a href="/Contact">Contact</a></li>
                  
                 </ul>
               </div>
               <div className='text-center'>
                    <p className='font-bold mb-2'>Social Links</p>
                    {/* facebook  */}
                    <div className='flex gap-3 sm:items-center justify-center'>
                       <MdOutlineFacebook></MdOutlineFacebook>
                       <FaTwitter></FaTwitter>
                       <FaInstagramSquare></FaInstagramSquare>
                    </div>
               </div>
           </div>
              <hr className='border border-gray-400 mt-6'></hr>
               <div className=' md:flex justify-between pt-8 text-white'>
             <p className='text-gray-400 text-xs md:text-xl text-center'>© 2026 Digitools. All rights reserved.</p>
             <div className='flex sm:mt-2 md:flex gap-3 justify-center items-center mt-3'>
                 <h5>Privacy Policy</h5>
                 <small className='text-gray-400'>Terms of Service</small>
                 <small className='text-gray-400'> Cookies</small>
             </div>
           </div>
            

      </footer>
    

  );
};

export default Footer;