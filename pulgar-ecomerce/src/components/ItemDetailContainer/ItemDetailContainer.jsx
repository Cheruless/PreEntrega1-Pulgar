/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../products/products";
import { ItemCounter } from "../ItemCounter/ItemCounter";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {pid} = useParams()

  useEffect(()=>{
    mFetch(pid)
    .then(res => setProduct(res))
    .catch(error => console.log(error))
  }, [])
  return (
    <div className="row">
      <div className="col-6 mt-5">
        <img className="img-fluid" src={product.imgUrl} />
      </div>
      <div className="col-6 text-center mt-5">
        <h1>{product.name}</h1>
        <h3>${product.price}</h3>
        <ItemCounter id={product.id} initial={1} stock={product.stock}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer