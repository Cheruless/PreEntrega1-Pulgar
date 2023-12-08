import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function showToast(message){
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

const useProduct = (pid) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const dbFireStore = getFirestore();
    getDoc(doc(dbFireStore, "products", pid))
      .then((res) => {
        res.exists()
          ? setProduct({ id: res.id, ...res.data() })
          : showToast("El producto no se encuentra o no existe.")
      })
      .catch((reg) => showToast(`Error al cargar producto: ${reg}`))
      .finally(setLoading(false));
  }, [pid]);

  return {loading, product};
};

export default useProduct;