import React, { Fragment, useEffect, useState } from 'react';
import Slider from '../../components/ProductDetails/Slider/Slider';
import ProductDetails from '../../components/ProductDetails/Details/ProductDetails'; // Renamed to avoid conflict
import { IImg } from '../../interfaces/Img';
import IStock from '../../interfaces/Stock';
import { IData } from '../../interfaces/Data';
import Card from '../../components/Card/Cards';
import { Slash } from 'lucide-react';
import Desc from '../../components/ProductDetails/Desc/Desc';
import ProductNav from '../../components/ProductDetails/ProductNav/Nav';

const ProductDetailsContainer = () => {
  const [data, setData] = useState<IData>({ data: {} as IData['data'] });
  const [img, setImg] = useState<IImg[]>([]);
  const [stock, setStock] = useState<IStock[]>([]);
  let [desc,setDesc]=useState("")

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
       <ProductNav name={data?.name}/>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-4 gap-4 my-4 ">
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
