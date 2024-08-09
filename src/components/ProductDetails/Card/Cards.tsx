import React, { Fragment } from 'react'
import { CircleDollarSign, Globe, Repeat2, ShoppingCart } from "lucide-react";


const data=[
    {
        id:1,
        icon:<ShoppingCart />,
        title:"Free shipping",
        desc:"On orders over $50.00",
        color:"#fce0e0",
    },
    {
        id:2,
        icon:<Repeat2/>,
        title:"Very easy to return",
        desc:"Just phone number.",
        color:"#def3f9",
    },
    {
        id:3,
        icon:<Globe/>,
        title:"Nationwide Delivery",
        desc:"Fast delivery nationwide.",
        color:"#def3f9",
    },
    {
        id:4,
        icon:<CircleDollarSign/>,
        title:"Refunds policy",
        desc:"60 days return for any reason",
        color:"#fce0e0",
    }
]
interface IProps{

}
const Card=({}:IProps)=> {
  return (
    <Fragment>
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
   {data.map((item)=>(
        <div className="p-3 rounded-md" style={{backgroundColor:item.color}} key={item.id}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-gray-700`}>{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
    ))
    }
   </div>
    </Fragment>
  )
}

export default Card