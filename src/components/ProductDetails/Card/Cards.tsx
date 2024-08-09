import React, { Fragment } from 'react'
import { CircleDollarSign, Globe, Repeat2, ShoppingCart } from "lucide-react";


const data=[
    {
        id:1,
        icon:<ShoppingCart />,
        title:"Free shipping",
        desc:"On orders over $50.00",
        color:"#fac2c2",
    },
    {
        id:2,
        icon:<Repeat2/>,
        title:"Very easy to return",
        desc:"Just phone number.",
        color:"#97c3cf",
    },
    {
        id:3,
        icon:<Globe/>,
        title:"Nationwide Delivery",
        desc:"Fast delivery nationwide.",
        color:"#97c3cf",
    },
    {
        id:4,
        icon:<CircleDollarSign/>,
        title:"Refunds policy",
        desc:"60 days return for any reason",
        color:"#fac2c2",
    }
]
interface IProps{

}
const Card=({}:IProps)=> {
  return (
    <Fragment>
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
   {data.map((item)=>(
        <div className="p-3 rounded-md" style={{backgroundColor:item.color}} key={item.id}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${item.color}`}>{item.icon}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
    ))
    }
   </div>
    </Fragment>
  )
}

export default Card