import { useCounter } from "../hooks/useCounter";

/* eslint-disable no-unused-vars */
export const ItemCounter = ({initial, stock, onAdd}) => {
  const {count, handleResta, handleSuma} = useCounter(initial, stock)

  const handleOnAdd = () => {
    onAdd(count);
  }

  console.log('Renderizando ItemCounter');
  
  return (
    <>
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={handleResta} className="btn btn-outline-dark"> - </button>
        <button onClick={handleSuma} className="btn btn-outline-dark"> + </button>
        <button onClick={handleOnAdd} className="btn btn-outline-dark w-75"> Agregar al carrito </button>
      </div>
      <div>
        <button className="btn btn-outline-dark w-100">Detalle</button>
      </div>
    </>
  )
}