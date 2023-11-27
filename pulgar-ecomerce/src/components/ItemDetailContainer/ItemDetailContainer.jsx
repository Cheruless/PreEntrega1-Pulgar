/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({ id: "" });
  const { pid } = useParams();

  useEffect(() => {
    const dbFireStore = getFirestore();
    getDoc(doc(dbFireStore, "products", pid))
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((error) => console.log("Error al cargar producto: ", error))
      .finally(setLoading(false));
  }, [pid]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
