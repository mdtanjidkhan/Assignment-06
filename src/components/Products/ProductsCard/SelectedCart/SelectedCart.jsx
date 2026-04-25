import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedCart = ({ selectedCarts, setSelectedCart, setCartCount, cartCount }) => {
   console.log(selectedCarts, "setselectedCart")
   const totalPrice = selectedCarts.reduce((sum, product) => sum + product.price, 0)
   console.log(totalPrice)
   const handleChecout = () => {
      setSelectedCart([])
      toast.success('Successfully purchased !', {
         position: "top-left",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         
      });

   }
   //   Deleted btn 
   const handleDeleted = (product) => {
      const filterData = selectedCarts.filter(item => item.name !== product.name)
      setSelectedCart(filterData)

      let count = cartCount - 1;
      setCartCount(count)

      toast.error('Remove form cart!', {
         position: "top-left",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
        
      });


   }

   return (
      <div className='container w-11/12 mx-auto bg-white rounded-3xl shadow-2xl p-5 md:p-10'>
         <h3 className='pr-5 font-bold text-[] text-xl'>Your Cart</h3>

         {
            selectedCarts.length === 0 ? <div className='flex items-center justify-center flex-col h-50 gap-3'>

               <div className='w-20 h-20 bg-orange-100 rounded-full flex flex-col justify-center items-center'>
                  <img src="/src/assets/shopping-cart.png" alt="" className='w-8 ' />
               </div>
               <h2 className='font-bold text-black'>No Cart Selected yet</h2>
               <p className='text-sm text-gray-400'>Go to Available tab to select product Cart </p>

            </div>
               :
               <>
                  <div>
                     {
                        selectedCarts.map((product, id) =>
                           <div key={id} className=' md:p-5 shadow-2xl mt-4 bg-gray-50 rounded-2xl'>
                              <div className='flex justify-between items-center p-6 md:p-8 rounded-2xl  '>
                                 <div className='flex gap-4 justify-center items-center'>
                                    <div className=' flex justify-center items-center w-10 h-10 md:w-15 md:h-15 rounded-full border bg-gray-300'>
                                       <img src={product.icon} alt="" className=' w-5 md:w-6' />
                                    </div>
                                    <div className=''>
                                       <h3 className='font-medium text-xs md:font-bold'>{product.name}</h3>
                                       <p className='font-bold text-black'>${product.price}</p>
                                    </div>
                                 </div>
                                 <div>
                                    <button onClick={() => handleDeleted(product)}><MdDelete className='text-red-600'></MdDelete></button>
                                 </div>
                              </div>
                           </div>

                        )
                     }
                  </div>
                  <div className='flex justify-between items-center mt-6'>
                     <h4 className='font-extrabold text-black text-3xl'>Total:</h4>
                     <span className='font-semibold text-3xl'>${totalPrice}</span>
                  </div>
                  <div>
                     <button onClick={handleChecout} className='btn btn-primary mt-4 w-full rounded-full'>Proceed to Checkout</button>
                  </div>

               </>
         }

      </div>

   );

};

export default SelectedCart;