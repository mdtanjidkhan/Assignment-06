import React from 'react';
// import FeaturesCard from '../FeaturesCard/FeaturesCard';
import Card from './Card';

const ProductCard = ({ products, setCartCount, cartCount, setSelectedCart, selectedCarts }) => {
    console.log(products)
    return (
         <div className='grid md:grid-cols-3 gap-3 w-11/12 mx-auto mt-7'>
               {
                    products.map(product => <Card
                        key={product.id}
                        product={product} selectedCarts={selectedCarts} setSelectedCart={setSelectedCart}
                         setCartCount={setCartCount} cartCount={cartCount}></Card>)
                }
            </div>
        
    );
};

export default ProductCard;