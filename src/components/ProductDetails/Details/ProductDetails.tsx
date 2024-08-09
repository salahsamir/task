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
        <h2 className="text-xl text-gray-600 font-semibold">{data.name}</h2>
        <Stock stock={stock} />
        <hr className='my-4 bg-slate-600' />
        <Details data={data} />

    </main>
  );
}

export default ProductDetailsContent;
