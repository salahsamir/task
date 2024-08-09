import React from 'react'
import ProductDetails from './pages/ProductDetails/ProductDetails'

export default function App() {
  return (
   <main>
     <header>
      <div className='flex justify-between px-10 py-2 bg-blue-200 fixed  left-0 right-0 z-50'>
        <div className='flex space-x-2'>
          <p>gaming</p>
          <p>graphic</p>
          <p>business</p>
        </div>
        <p>Best offers</p>
      </div>

      
      </header>
      <section className='container p-20'>
        <ProductDetails/>
      </section>
   </main>
  )
}
