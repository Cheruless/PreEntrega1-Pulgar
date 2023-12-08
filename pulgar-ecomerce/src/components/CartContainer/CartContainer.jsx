import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartList, clearCart, removeFromCart } = useCartContext();

  const totalPrice = cartList.reduce((total, product) => {
    return total + product.price * product.cant;
  }, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <div className="row">
        {cartList.map((product) => (
          <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
        ))}
      </div>
      <div className="mt-3">
        <h4>Precio final: {totalPrice}</h4>
        <button className="btn btn-outline-danger" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-outline-success ms-2">
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;