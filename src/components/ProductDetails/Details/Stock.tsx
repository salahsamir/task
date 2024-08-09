import React, { Fragment } from 'react'
import IStock from '../../../interfaces/Stock'
import { ShoppingBag, Sparkles } from 'lucide-react'
interface IProps{
stock:IStock[]
}
const Stock=({stock}:IProps)=> {
  return (
    <Fragment>
        <div className="my-4 ">
        <div className='flex items-center space-x-8 my-4  py-4'>
            <span className='text-lg font-bold border-1 border border-green-400  text-green-500 p-1 rounded-md'>{stock.price} EGP</span>
            <p className='text-md text-gray-500   flex items-center  gap-2'> <Sparkles width={20} />In Stock</p>
        </div>
        <div className=' flex justify-around space-x-8 my-4 text-center '>
        <div className="flex space-x-2 justify-around  items-center text-lg  w-1/4 py-1   bg-slate-100 rounded-md">
  <button className="w-8 h-8 flex items-center justify-center p-1 rounded-full  text-black bg-white border border-gray-500">-</button>
  <h6>{stock.in_stock}</h6>
  <button className="w-8 h-8 flex items-center justify-center p-1 rounded-full  text-black bg-white border border-gray-500">+</button>
</div>
        <div className='bg-gray-900 w-2/3  rounded-md text-lg  text-slate-100  py-2 flex justify-center gap-2 '>
        <ShoppingBag />
            Add To bag
        </div>
        </div>
        </div>
       
    </Fragment>
  )
}

export default Stock