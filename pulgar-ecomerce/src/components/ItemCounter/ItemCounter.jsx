/* eslint-disable react/prop-types */
import { useCounter } from "../hooks/useCounter.jsx";

export const ItemCounter = ({initial, stock, handleAdd}) => {
  const {count, handleReduce, handleIncrease} = useCounter(initial, stock)


  const handleOnAdd = ()=>
    handleAdd(count)

  return (
    <>
      <div>
        <p className="text-black" >Cantidad: {count}</p>
      </div>
      <div>
        <button onClick={handleReduce} className="btn btn-outline-dark" alt="Restar cantidad"> - </button>
        <button onClick={handleIncrease} className="btn btn-outline-dark" alt="Sumar cantidad" > + </button>
        <button onClick={handleOnAdd} className="btn btn-success w-75" alt="Agregar producto al carrito" > Agregar al carrito </button>
      </div>
    </>
  )
}