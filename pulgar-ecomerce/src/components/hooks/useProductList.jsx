import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function showToast(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
}

const useProductList = (cid) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .catch((reg) => showToast(`Error al cargar producto: ${reg}`))
      .finally(() => setLoading(false));
  }, [cid]);

  return {loading, products}
};

export default useProductList;