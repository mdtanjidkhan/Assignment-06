import React from 'react';
import { use } from 'react';
import PricingCard from './PricingCard';

const SimplePricing = ({plansPromice}) => {
      const plans = use(plansPromice)
      console.log(plans)
    return (
        <div>
            <div className='text-center mx-auto p-8 space-y-2'>
                <h2 className='font-extrabold text-2xl text-[#101727]'>Simple, Transparent Pricing</h2>
                <span className='font-medium text-xl text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</span>
            </div>
               
               <div className='grid md:grid-cols-3 gap-4 w-11/12 mx-auto'>

               {
                plans.map(plan=><PricingCard key={plan.id} plan={plan}></PricingCard>)
               }
               </div>
        </div>
    );
};

export default SimplePricing;