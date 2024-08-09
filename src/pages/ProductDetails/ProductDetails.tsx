import React, { Fragment, useEffect, useState } from 'react';
import Slider from '../../components/ProductDetails/Slider/Slider';
import ProductDetails from '../../components/ProductDetails/Details/ProductDetails'; // Renamed to avoid conflict
import { IImg } from '../../interfaces/Img';
import IStock from '../../interfaces/Stock';
import { IData } from '../../interfaces/Data';
import Card from '../../components/Card/Cards';
import { Slash } from 'lucide-react';

const ProductDetailsContainer = () => {
  const [data, setData] = useState<IData>({ data: {} as IData['data'] });
  const [img, setImg] = useState<IImg[]>([]);
  const [stock, setStock] = useState<IStock[]>([]);

  const fetchApi = async () => {
    try {
      const response = await fetch('https://sellxa.com/backend/api/products/find?mainCategory=laptop&link=hp-445-g5-ryzen5-8gb-256gb-14inch');
      const result = await response.json();
      console.log(result);
      
      setData(result.data);
      setImg(result.image);
      setStock(result.stock);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Fragment>
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
        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{data?.name?.toString().slice(0, 20)}</span>
      </div>
    </li>
  </ol>
</nav>

      <div className="grid grid-cols-1 md:grid-cols-2 space-x-8 gap-4 my-8 p-8">
        <div className="order-2 md:order-1">
          <Slider img={img} />
        </div>
        <div className="order-1 md:order-2">
         {data && <ProductDetails stock={stock} data={data} />}
        </div>
      </div>
      <Card/>
    </Fragment>
  );
}

export default ProductDetailsContainer;
