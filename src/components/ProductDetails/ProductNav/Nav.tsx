import { Slash } from 'lucide-react'
import React from 'react'
interface IProps{
name:string
}
const ProductNav=({name}:IProps)=> {
  return (
    <nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
      
        Home Page
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <Slash size={8} />
        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Shop</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <Slash size={8} />
        <span className="ms-1  font-medium text-gray-500 md:ms-2 dark:text-gray-400 underline">{name}</span>
      </div>
    </li>
  </ol>
</nav>

  )
}

export default ProductNav