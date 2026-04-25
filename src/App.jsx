
import './App.css'
import Navbar from "./components/DaisyNav/Navbar";
import Banar from "./components/BanarSection/Banar";
import { Suspense, useState } from 'react';
import ProductsPricing from './components/Products/ProductsPricing';
import { Divide } from 'lucide-react';
import StepSection from './components/StepSection/StepSection';
import SimplePricing from './components/SimplePricing/SimplePricing';
import Footer from './components/FooterSection/Footer';
import { ToastContainer } from 'react-toastify';

const productsPromise = fetch('productData.json')
   .then(res => res.json())

// Pricing e Data 
const plansPromice = fetch('planData.json')
.then(res=>res.json())

function App() {
   const [cartCount, setCartCount] = useState(0);

   return (
      <>
         <header>
            <Navbar cartCount={cartCount} setCartCount={setCartCount}></Navbar>
         </header>
         <Banar></Banar>


         <main>
            <Suspense fallback={<div className='flex h-screen w-full justify-center items-center'>
               <span className="loading loading-dots loading-xl"></span>
            </div>}>
               <ProductsPricing productsPromise={productsPromise} setCartCount={setCartCount} cartCount={cartCount}></ProductsPricing>
            </Suspense>
         </main>
         
             <StepSection></StepSection>
         
         <main>
            <Suspense fallback={<div className='flex h-screen w-full justify-center items-center'>
               <span className="loading loading-dots loading-xl"></span>
            </div>}>
               <SimplePricing plansPromice={plansPromice}></SimplePricing>
            </Suspense>
         </main>

         <Footer></Footer>

         <ToastContainer></ToastContainer>
      </>
   )
}

export default App
