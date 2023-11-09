/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { mFetch } from "../products/products";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {cid} = useParams();

  useEffect(() => {
    cid?
    mFetch()
      .then((res) => setProducts(res.filter(prod => prod.category === cid)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    :
    mFetch()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [cid]);

  return (
    <>
      {
        loading
        ? <h2>Cargando. . .</h2>
        :
        products.map((product) => (
          <Item key={product.id} product={product} />
          )
        )
      
      }
    </>
  );
}

export default ItemListContainer;
