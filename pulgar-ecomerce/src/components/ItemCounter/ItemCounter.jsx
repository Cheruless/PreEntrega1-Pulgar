/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCounter } from "../hooks/useCounter";

export const ItemCounter = ({id, initial, stock}) => {
  const {count, handleResta, handleSuma} = useCounter(initial, stock)
  
  return (
    <>
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={handleResta} className="btn btn-outline-dark"> - </button>
        <button onClick={handleSuma} className="btn btn-outline-dark"> + </button>
        <button onClick={()=>console.log(count)} className="btn btn-outline-dark w-75"> Agregar al carrito </button>
      </div>
      <div>
        <Link to={`/item/${id}` }>
          <button className="btn btn-outline-dark w-100">Detalle</button>
        </Link>
      </div>
    </>
  )
}