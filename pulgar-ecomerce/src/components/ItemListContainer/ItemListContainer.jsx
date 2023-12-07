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
      .catch((reg) => console.log("Error loading products: ", reg))
      .finally(() => setLoading(false));
  }, [cid]);

  return (
    <div className="container mt-4">
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : products.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <Item product={product} />
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;