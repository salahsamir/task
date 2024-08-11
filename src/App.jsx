import React from 'react'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Nav from './components/Nav/Nav'

export default function App() {
  return (
   <main className='pb-20'>
     <Nav/>
      <section className='container '>
        <ProductDetails/>
        
      </section>
   </main>
  )
}
