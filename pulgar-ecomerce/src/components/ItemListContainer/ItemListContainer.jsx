import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import useProductList from "../hooks/useProductList";

function ItemListContainer() {
  const {cid} = useParams();
  const {loading, products} = useProductList(cid)

  return (
    <div className="container mt-4">
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : products.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <Item product={product} />
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;