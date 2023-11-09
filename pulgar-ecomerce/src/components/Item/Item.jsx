import { ItemCounter } from "../ItemCounter/ItemCounter";

/* eslint-disable react/prop-types */
const Item = ({ product }) => {
  return (
    <div className="card w-25 flex-column ">
      <div className="card-img">
        <img className="img-fluid" src={product.imgUrl} />
      </div>
      <div className="card-body">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
      <div className="card-footer">
        <ItemCounter id={product.id} initial={0} stock={product.stock} />
      </div>
    </div>
  );
};

export default Item;
