/* eslint-disable react/prop-types */
//Componente que permite controlar la cantidad, ir al carro o seguir comprando.
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true);
  const { addToCart } = useCartContext();

  const handleAdd = (cant) => {
    addToCart({ ...product }, cant);
    setIsCount(false);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={product.img}
            alt={`Imágen de ${product.name}`}
          />
        </div>
        <div className="col-md-6 text-center">
          <h2>{product.name}</h2>
          <h3 className="text-success">${product.price}</h3>
          <p>{product.desc}</p>
            <ItemCounter
              initial={1}
              stock={product.stock}
              handleAdd={handleAdd}
            />
          {isCount
            ? null
            : 
            <div className="mt-3">
              <Link to="/cart" className="btn btn-success">
                Ir al Carro
              </Link>
              <Link to="/" className="btn btn-primary ms-2">
                Continuar comprando
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
