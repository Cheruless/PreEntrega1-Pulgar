//Componente que muestra los productos del carro en el proceso de pago.
const CheckOut_CartList = ({ cartList, totalPrice }) => (
  <div className="col-md-5">
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-primary">Tu pedido</span>
      <span className="badge bg-primary rounded-pill">{cartList.length}</span>
    </h4>
    <ul className="list-group mb-3">
      {/* Mapeo de productos en el carro */}
      {cartList.map((product) => (
        <li
          key={product.id}
          className="list-group-item d-flex justify-content-between lh-sm"
        >
          {/* Detalles del producto en el carrito */}
          <div>
            <h6 className="my-0">{product.name}</h6>
            <small className="text-body-secondary">{product.desc}</small>
          </div>
          <span className="text-body-secondary">
            ${product.price * product.cant}
          </span>
        </li>
      ))}
      <li className="list-group-item d-flex justify-content-between">
        <span>Total: </span>
        <strong>${totalPrice}</strong>
      </li>
    </ul>
  </div>
);

export default CheckOut_CartList;
