/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    const dbFireStore = getFirestore();
    getDoc(doc(dbFireStore, "products", pid))
      .then((res) => {
        res.exists()
          ? setProduct({ id: res.id, ...res.data() })
          : console.log("El producto no existe");
      })
      .catch((error) => console.log("Error al cargar producto: ", error))
      .finally(setLoading(false));
  }, [pid]);

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
