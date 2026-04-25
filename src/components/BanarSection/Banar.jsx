import { Play } from 'lucide-react';
import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

const Banar = () => {
    return (
        <div className='flex flex-col gap-4 md:flex-row w-11/12 mx-auto justify-between items-center p-5 mt-30 mb-10'>
            <div className='container-left  space-y-3'>
                <div className=' '>
                    <h2 className='rounded-full flex gap-1 items-center p-2 cursor-pointer bg-amber-300 px-1 py-4'><FaRegDotCircle></FaRegDotCircle> New: AI-Powered Tools Available</h2>
                </div>
                <p className='text-2xl sm:text-3xl md:text-[72px] md:font-extrabold text-[#101727] leading-tight '>Supercharge Your <br></br>Digital Workflow</p>
                <p className='text-left md:text-left text-sm md:text-[18px] font-medium text-[#627382]'>
                    Access premium AI tools, design assets, templates, and productivity <br></br>software—all in one place. Start creating faster today.<br></br>Explore Products

                </p>
                <div className='flex justify-center items-center md:flex gap-4'>
                    <button className='btn p-3  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Explore Products</button>
                    <button className='btn p-5'><Play></Play>Watch Demo</button>
                </div>
            </div>
            <div className='container-right mx-auto  md:w-[400px] shadow-2xl'>
                <img src="/src/assets/banner.png" alt="banar.png" />
            </div>
        </div>
    );
};

export default Banar;