import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext/CartContext";

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
          <div key={product.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.img}
                    alt={`Imágen de ${product.name}`}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      <strong>Cantidad:</strong> {product.cant}
                    </p>
                    <p className="card-text">
                      <strong>Precio Unitario:</strong> {product.price}
                    </p>
                    <p className="card-text">
                      <strong>Precio Total:</strong>{" "}
                      {product.price * product.cant}
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Quitar producto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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