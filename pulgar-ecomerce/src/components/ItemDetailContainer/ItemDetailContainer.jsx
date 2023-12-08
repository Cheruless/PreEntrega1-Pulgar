/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import useProduct from "../hooks/useProduct";

const ItemDetailContainer = () => {
  const { pid } = useParams();
  const {loading, product} = useProduct(pid);
  
  return (
    <>
      {loading ? (
        <h2>Cargando producto. . .</h2>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p>El producto no se encuentra.</p>
      )}
    </>
  );
};

export default ItemDetailContainer;
