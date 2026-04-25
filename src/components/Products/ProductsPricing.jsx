import React, { use, useState } from 'react';
import ProductCard from './ProductsCard/ProductCard';
import SelectedCart from './ProductsCard/SelectedCart/SelectedCart';
const ProductsPricing = ({ productsPromise, setCartCount, cartCount }) => {
    const products = use(productsPromise)
    const [productType, setProductType] = useState("product")
    const [selectedCarts, setSelectedCart] = useState([])
    console.log(products)
    return (
        <div>
            <div className=' md:mt-20 flex flex-col justify-center items-center space-y-4'>
                <h1 className='font-bold text-2xl text-center md:text-[48px] md:font-extrabold text-[#101727]'>Premium Digital Tools</h1>
                <p className=' text-center md:font-medium text-[#627382] md:text-center'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativit</p>
                <div className='p-4 rounded-full'>
                    <button onClick={()=> setProductType('product')}
                     className={`btn ${productType === 'product'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`}>Product</button>
                    <button onClick={()=> setProductType('cart') }
                     className={`btn ${productType === 'cart'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white': ''}`}>Cart({selectedCarts.length})</button>
                    {/* <button className='btn '>cart</button> */}
                </div>
               
            </div>
            
              {productType === 'product'? <ProductCard products={products} setCartCount={setCartCount} cartCount={cartCount}
            selectedCarts={selectedCarts} setSelectedCart={setSelectedCart}
            ></ProductCard> : <SelectedCart setSelectedCart={setSelectedCart} selectedCarts={selectedCarts} products={products} setCartCount={setCartCount} cartCount={cartCount}></SelectedCart>}

           
           
        </div>
        
    );
};

export default ProductsPricing;