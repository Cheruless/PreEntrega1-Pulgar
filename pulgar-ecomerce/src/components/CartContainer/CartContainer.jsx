import { useCartContext } from "../../contexts/CartContext/CartContext";

const Cart = () => {
  const { cartList, clearCart } = useCartContext();

  const totalPrice = cartList.reduce((total, product) => {
    return total + product.price * product.cant;
  }, 0);
  return (
    <div className="container">
      {cartList.map((product) => (
        <div key={product.id}>
          <div className="row border-black">
            <div className="col-4">
              <img className="img-fluid" src={product.img} />
            </div>
            <div className="col-8">
              <p className="text-bg-primary">
                Producto: {product.name}
              </p>
              <p className="text-bg-secondary">
                Cantidad: {product.cant}
              </p>
              <p className="text-bg-warning">
                Precio Unitario: {product.price}
              </p>
              <p className="text-bg-success">
                Precio Total: {product.price * product.cant}
              </p>
            </div>
          </div>
        </div>
      ))}
      Precio total: {totalPrice}
      <br />
      <button className="btn btn-outline-danger" onClick={clearCart}>
        Vaciar carrito.
      </button>
      <br />
      <button>Terminar compra</button>
    </div>
  );
};

export default Cart;
