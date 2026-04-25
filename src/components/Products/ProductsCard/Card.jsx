import React, { useState } from 'react';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import { toast } from 'react-toastify';


const Card = ({ product, cartCount, setCartCount, setSelectedCart, selectedCarts }) => {
    const [isCart, setIsCart] = useState(false)

    const handleProductCart = () => {
        let count = cartCount + 1;
        setCartCount(count)
        setIsCart(true)
        setSelectedCart([...selectedCarts, product])
       toast.success('Item Added to cart!', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
        });

    }
    return (
        <div>
            <div>
                <div className="card  bg-base-100 shadow-sm flex flex-col">
                    <div className="card-body relative">
                        {
                            product.tagType === "popular" && (<span className='absolute top-2 right-2 text-blue-600 bg-blue-200 px-2 py-1 text-xs rounded-full'>popular</span>)
                        }
                        {
                            product.tagType === "best seller" && (<span className='absolute top-2 right-2 text-[#BB4D00] bg-orange-300 px-2 py-1 text-xs rounded-full'>best seller</span>)
                        }
                        {
                            product.tagType === "new" && (<span className='absolute top-2 right-2 text-green-500 bg-green-200 px-2 py-1 text-xs rounded-full'>new</span>)
                        }
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