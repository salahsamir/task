import React from 'react'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Nav from './components/Nav/Nav'

export default function App() {
  return (
   <main>
     <Nav/>
      <section className='container py-20 '>
        <ProductDetails/>
      </section>
   </main>
  )
}
