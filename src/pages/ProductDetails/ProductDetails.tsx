import React, { Fragment, useEffect, useState } from 'react';
import Slider from '../../components/ProductDetails/Slider/Slider';
import ProductDetails from '../../components/ProductDetails/Details/ProductDetails'; // Renamed to avoid conflict
import { IImg } from '../../interfaces/Img';
import IStock from '../../interfaces/Stock';
import { IData } from '../../interfaces/Data';
import Card from '../../components/ProductDetails/Card/Cards';
import { Slash } from 'lucide-react';
import Desc from '../../components/ProductDetails/Desc/Desc';
import ProductNav from '../../components/ProductDetails/ProductNav/Nav';
import { Helmet } from 'react-helmet';

const ProductDetailsContainer = () => {
  const [data, setData] = useState<IData>({ data: {} as IData['data'] });
  const [img, setImg] = useState<IImg[]>([]);
  const [stock, setStock] = useState<IStock[]>([]);

  const fetchApi = async () => {
    try {
      const response = await fetch('https://sellxa.com/backend/api/products/find?mainCategory=laptop&link=hp-445-g5-ryzen5-8gb-256gb-14inch');
      const result = await response.json();
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
      <Helmet>
                <meta charSet="utf-8" />
                <title>{data.name}</title>
        
            </Helmet>
       <ProductNav name={data.name?.slice(0,20)}/>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-4 gap-4 ">
        <div className="order-2 md:order-1">
          <Slider img={img} />
        </div>
        <div className="order-1 md:order-2">
         {data && <ProductDetails stock={stock} data={data} />}
        </div>
      </div>
      <Card/>
       <Desc desc={data.additional_features}/>
    </Fragment>
  );
}

export default ProductDetailsContainer;
