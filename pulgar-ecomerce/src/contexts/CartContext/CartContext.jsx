import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function askToAdd(cart, item, cant, setCart) {
  console.log("item", item);
  Swal.fire({
    title: `Está sumando el producto ${item.name} ${cant} veces. ¿Desea sumarlo?`,
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((userResponse) => {
    if (userResponse) {
      // Sumar la cantidad al producto existente en el carrito original
      // usando un carro buffer
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, cant: product.cant + cant }
          : product
      );
      setCart(updatedCart);

      toast.success("Carro actualizado correctamente", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });

      console.log("El usuario ha seleccionado Sí.");
    } else {
      console.log("El usuario ha seleccionado No o ha cerrado el diálogo.");
    }
  });
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setCart] = useState([]);
  console.log(cartList);

  const addToCart = (item, cant) => {
    const itemToAdd = { ...item, cant };
    console.log(cant);
    cartList.find((product) => product.id === itemToAdd.id)
      ? askToAdd(cartList, item, cant, setCart)
      : (setCart([...cartList, itemToAdd]),
        toast.success("Se ha agregado el producto al carro.", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
        }));
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
