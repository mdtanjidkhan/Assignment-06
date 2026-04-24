import React from 'react';
import SimpleFeatures from './SimpleFeatures';
import { useState } from 'react';

const PricingCard = ({plan}) => {
    console.log(plan)
  const [activeId, setActiveId] = useState(2)

    return (
        <div>
            <div key={plan.id} onClick={()=>setActiveId(plan.id)}
            className={`card cursor-pointer transition-all duration-300 bg-base-200 shadow-md flex flex-col h-full ${activeId === plan.id ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white " : ''}`}>
                <div className="card-body">
                    <div className='relative'>
                        <span className={`px-7 py-1 rounded-xl absolute -top-10 right-30 ${plan.tag === 'Most Popular' ? "bg-orange-200 text-orange-400" : '' }`}>{plan.tag}</span>
                    </div>
                    <span className="font-bold text-2xl text-[#101727]">{plan.name}</span>
                        <p className="font-medium text-xs text-[#627382]">{plan.description}</p>
                    <div className="flex gap-2 ">
                        <span className="text-xl font-bold">{plan.price} /</span>
                        <span className='text-xl text-[#627382]'>{plan.period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                       
                       {
                        plan.features.map((feature, i)=> <SimpleFeatures key={i} feature={feature}></SimpleFeatures>)
                       } 
                       
                    </ul>
                    <div className="mt-6">
                        <button className={`btn w-full flex-grow`}>{plan.buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;