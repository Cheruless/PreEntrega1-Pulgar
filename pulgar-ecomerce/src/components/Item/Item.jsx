/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "300px" }}>
      <img
        src={product.img}
        alt={`Imágen de ${product.name}`}
        className="card-img-top img-fluid"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          Precio: {product.price.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/item/${product.id}`} className="btn btn-outline-dark w-100">
          Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
