import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);


export const useCartContext = () =>  useContext(CartContext)

function askToAdd(cart, item, count, setCart) {
  // TODO: AGREGAR UNA SWEET ALERT DE SER POSIBLE PARA UI
  const userResponse = window.confirm(
    `Está añadiendo el mismo producto que ya se encuentra en el carro ${count} veces. ¿Desea sumarlo?`
  );

  if (userResponse) {
    // Sumar la cantidad al producto existente en el carrito original
    // usando un carro buffer
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, count: product.count + count }
        : product
    );
    setCart(updatedCart);
    console.log("El usuario ha seleccionado Sí.");
  } else {
    console.log("El usuario ha seleccionado No o ha cerrado el diálogo.");
  }
}

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    const itemToAdd = { ...item, cant };

    cart.find((product) => product.id === itemToAdd.id)
      ? askToAdd(cart, item, cant, setCart)
      : setCart([...cart, itemToAdd]);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
