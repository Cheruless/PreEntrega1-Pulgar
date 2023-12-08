import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function showSweetAlert(item, cant, onConfirm) {
  Swal.fire({
    title: `Está sumando el producto ${item.name} ${cant} veces. ¿Desea sumarlo?`,
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((userResponse) => {
    if (userResponse.isConfirmed) {
      onConfirm();
    }
  });
}

function showToast(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
}

function askToAdd(cart, item, cant, setCart) {
  showSweetAlert(item, cant, () => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, cant: product.cant + cant }
        : product
    );
    setCart(updatedCart);
    showToast("Carro actualizado correctamente");
  });
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setCart] = useState([]);

  const addToCart = (item, cant) => {
    const itemToAdd = { ...item, cant };
    cartList.find((product) => product.id === itemToAdd.id)
      ? askToAdd(cartList, item, cant, setCart)
      : (setCart([...cartList, itemToAdd]),
        showToast("Se ha agregado el producto al carro."));
  };

  const removeFromCart = (itemID) => {
    const updatedCart = cartList.filter((product) => product.id !== itemID);
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
