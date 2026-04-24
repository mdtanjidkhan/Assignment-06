import React from 'react';

const StepSection = () => {
    return (
        <div className='w-11/12 mx-auto mt-10 bg-gray-200 mb-10'>
          
          <div className='container text-center md:text-center pt-10 space-y-2'>
              <h2 className='font-medium text-2xl md:font-extrabold md:text-[40px] text-[#101727]'>Get Started in 3 Steps</h2>
              <p className='text-xs font-medium text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
          </div>
          <div className='grid md:grid-cols-3 gap-4 p-4 mt-7'>
            {/* Card: 1 */}
            <div className='relative bg-white shadow-sm p-8 rounded-2xl border border-gray-100 hover:shadow-md '>
                <span className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-bold px-2 py-1 text-xs '>01</span>

                <div className='w-25 h-25 rounded-full border-2 border-gray-300 mx-auto flex justify-center items-center'>
                <img src="/src/assets/user.png" className='w-15' alt="" />
            </div>
             <div className='step mx-auto text-center px-4 mt-3 space-y-3'>
                <h4 className='font-bold text-2xl text-[#001931]'>Create Account</h4>
                <p className='text-xm text-[#627382] '>Sign up for free in seconds. No credit card required to get started.</p>
             </div>
            </div>
             {/* card: 2 */}
              <div className='relative bg-white shadow-sm p-8 rounded-2xl border border-gray-100 hover:shadow-md '>
                <span className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-bold px-2 py-1 text-xs '>02</span>

                <div className='w-25 h-25 rounded-full border-2 border-gray-300 mx-auto flex justify-center items-center'>
                <img src="/src/assets/package.png" className='w-15' alt="" />
            </div>
             <div className='step mx-auto text-center px-4 mt-3 space-y-3'>
                <h4 className='font-bold text-2xl text-[#001931]'>Choose Products</h4>
                <p className='text-xm text-[#627382] '>Browse our catalog and select the tools that fit your needs</p>
             </div>
            </div>
            {/* card:3 */}
             <div className='relative bg-white shadow-sm p-8 rounded-2xl border border-gray-100 hover:shadow-md '>
                <span className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-bold px-2 py-1 text-xs '>01</span>

                <div className='w-25 h-25 rounded-full border-2 border-gray-300 mx-auto flex justify-center items-center'>
                <img src="/src/assets/rocket.png" className='w-15' alt="" />
            </div>
             <div className='step mx-auto text-center px-4 mt-3 space-y-3'>
                <h4 className='font-bold text-2xl text-[#001931]'>Start Creating</h4>
                <p className='text-xm text-[#627382] '>Download and start using your premium tools immediately.</p>
             </div>
            </div>

          </div>
             
        </div>
    );
};

export default StepSection;