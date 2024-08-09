import React from 'react';
import IStock from '../../../interfaces/Stock';
import { IData } from '../../../interfaces/Data';
import Stock from './Stock';
import Details from './Details';

interface IProps {
    stock: IStock[];
    data: IData;
}


const ProductDetailsContent = ({ stock, data }: IProps) => {
    console.log(data);
    
  return (
    <main>
        <h3 className="text-lg text-gray-600 font-semibold pt-16 ">{data.name}</h3>
        <Stock stock={stock}  />
        <hr className='my-4 bg-slate-600' />
        <Details data={data} />

    </main>
  );
}

export default ProductDetailsContent;
