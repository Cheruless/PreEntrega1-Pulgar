/* eslint-disable react/prop-types */
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true);
  const { addToCart } = useCartContext();

  const handleAdd = (cant) => {
    console.log(`Sumando ${cant} del producto ${product.name}.`);
    addToCart({ ...product}, cant );
    setIsCount(false);
  };

  return (
    <div className="row">
      <div className="col-6 mt-5">
        <img className="img-fluid" src={product.img} />
      </div>
      <div className="col-6 text-center mt-5">
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <p>{product.desc}</p>
        {isCount ? (
          <ItemCounter
            initial={1}
            stock={product.stock}
            handleAdd={handleAdd}
          />
        ) : (
          <>
            <Link className="btn btn-outline-dark " to="/cart">
              Ir al Carro
            </Link>
            <Link className="btn btn-outline-dark " to="/">
              Continuar comprando
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
