/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import Item from "../Item/Item";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const dbFireStore = getFirestore();
    const productsCollection = collection(dbFireStore, "products");
    
    const productsQuery = cid
      ? query(productsCollection, where("category", "==", cid))
      : productsCollection;

    getDocs(productsQuery)
      .then((res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      )
      .catch((reg) => console.log('Error loading products: ',reg))
      .finally(() => setLoading(false));
  }, [cid]);

  return (
    <>
      {loading ? (
        <h2>Cargando. . .</h2>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
    </>
  );
}

export default ItemListContainer;
