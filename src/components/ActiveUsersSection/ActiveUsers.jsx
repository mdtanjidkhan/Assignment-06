import React from 'react';

const ActiveUsers = () => {
    return (
        <div className=' w-11/12 mx-auto bg-[#4F39F6] p-10 mb-5'>
            <div className=' text-center md:flex  md:justify-around space-y-2'>
                <div className='container-left'>
                   <p className='font-bold md:font-extrabold text-[#FFFFFF] md:text-2xl'>50K+</p>
                   <span className=' text-xs md:font-medium text-[#FFFFFF] opacity-80'>Active Users</span>
                </div>
                <div className='container-midde'>
                   <p className='font-bold md:font-extrabold text-[#FFFFFF] md:text-2xl'>200+</p>
                   <span className='font-medium text-[#FFFFFF] opacity-80'>Premium Tools</span>
                </div>
                <div className='container-right'>
                   <p className='font-bold md:font-extrabold text-[#FFFFFF] md:text-2xl'>4.9</p>
                   <span className='font-medium text-[#FFFFFF] opacity-80'>Rating</span>
                </div>
            </div>
        </div>
    );
};

export default ActiveUsers;