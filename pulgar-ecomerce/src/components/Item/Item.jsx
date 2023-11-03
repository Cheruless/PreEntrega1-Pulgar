import { ItemCounter } from "../ItemCounter/ItemCounter";

/* eslint-disable react/prop-types */
const Item = ({product}) => {
  return (
    <div key={product.id} className="card w-25">
      <div className="card-body">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
      <div className="card-footer">
        <ItemCounter initial={0} stock={product.stock}/>
      </div>
    </div>
  );
};

export default Item;
