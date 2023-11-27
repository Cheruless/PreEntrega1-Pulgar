/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card w-25 flex-column ">
      <div className="card-img">
        <img className="img-fluid" src={product.img} />
      </div>
      <div className="card-body">
        <p>{product.name}</p>
        <p>{product.price.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}</p>
      </div>
      <div className="card-footer">
        <Link to={`/item/${product.id}`}>
          <button className="btn btn-outline-dark w-100">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
