/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { loadProducts } from "../products/products";
import Item from "../Item/Item";

function ItemListContainer({ greeting = "saludando por defecto" }) {
  console.log('Renderizando ItemListContainer');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  return (
    <>
      {
        loading
        ? <h2>Cargando. . .</h2>
        :
        products.map((product) => (
        <Item key={product.id} product={product} />
      ))
      
      }
    </>
  );
}

export default ItemListContainer;
