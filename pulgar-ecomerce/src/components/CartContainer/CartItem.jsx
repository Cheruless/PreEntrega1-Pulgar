//Componente que representa un articulo en el carro de compras.
const CartItem = ({ product, removeFromCart }) => (
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
              <strong>Precio Total:</strong> {product.price * product.cant}
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
);

export default CartItem;