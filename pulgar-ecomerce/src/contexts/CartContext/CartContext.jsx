import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function askToAdd(cart, item, cant, setCart) {
  // TODO: AGREGAR UNA SWEET ALERT DE SER POSIBLE PARA UI
  Swal.fire({
    title: `Está añadiendo el producto ${item.name} que ya se encuentra en el carro ${cant} veces. ¿Desea sumarlo?`,
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
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
      console.log("El usuario ha seleccionado Sí.");
    } else {
      console.log("El usuario ha seleccionado No o ha cerrado el diálogo.");
    }
  })
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setCart] = useState([]);
  console.log(cartList);

  const addToCart = (item, cant) => {
    const itemToAdd = { ...item, cant };
    console.log(cant)
    cartList.find((product) => product.id === itemToAdd.id)
      ? askToAdd(cartList, item, cant, setCart)
      : setCart([...cartList, itemToAdd]);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
