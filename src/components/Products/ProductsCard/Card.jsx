import React, { useState } from 'react';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
 

const Card = ({product, cartCount, setCartCount, setSelectedCart, selectedCarts}) => {
    const [isCart, setIsCart] = useState(false)

    const handleProductCart = ()=>{
        let count = cartCount + 1;
        setCartCount(count)
        setIsCart(true)
        setSelectedCart([...selectedCarts, product])
         
    }
    return (
         <div>
            <div>
                <div className="card  bg-base-100 shadow-sm flex flex-col">
                    <div className="card-body">
                        <span className="text-right">{product.tagType
                        }</span>
                        <div className=''>
                            <div className='w-15 h-15 rounded-full border-2 border-gray-100 shadow-sm flex justify-center items-center'>
                                <img src={product.icon} alt="" className='' />
                            </div>
                        </div>
                        <div className="">
                            <h2 className="text-[24px] font-bold text-[#101727]">{product.name}</h2>
                            <p className='text-[#627382] '>{product.description}</p>
                        </div>
                        <div className='flex gap-1'>
                            <h3 className='font-bold text-[#101727]'> ${product.price} /</h3>
                            <h4 className='text-[#627382]'>{product.period}</h4>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-xs text-[#627382] font-medium">
                            {
                                product.features.map((feature, i) => <FeaturesCard
                                    key={i} feature={feature} 
                                ></FeaturesCard>)

                            }

                        </ul>
                        <div className="mt-6 ">
                            <button onClick={handleProductCart}
                            className="btn btn-primary btn-block rounded-full w-full">{isCart === true ? 'Added to Cart' : 'Buy Now'}</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            
        
    );
};

export default Card;