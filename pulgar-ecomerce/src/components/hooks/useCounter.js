import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

function askToAdd(){
  prompt('Está añadiendo el mismo producto que ya se encuentra en el carro. ¿Desea sumarlo?')
}

export const useCounter = (item, min, max) => {
  const [count, setCount] = useState(min);
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  const handleIncrease = () => {
    if (count < max) setCount(count + 1);
  };

  const handleReduce = () => {
    if (count > min) setCount(count - 1);
  };

  const handleAddToCart = () => {
    const itemToAdd = { ...item, count };

    cart.find((product) => product.id === itemToAdd.id)
      ? askToAdd()
      : setCart([...cart, itemToAdd]);
  };

  return {
    count,
    handleReduce,
    handleIncrease,
    handleAddToCart,
  };
};
