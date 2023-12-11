import { FaShoppingCart } from 'react-icons/fa';  // Asegúrate de tener instalada la librería de iconos

import './CartWidget.css';  // Puedes crear un archivo separado para los estilos de CartWidget
import { useCartContext } from '../../contexts/CartContext/CartContext';

export const CartWidget = () => {
  const {cartList} = useCartContext();

  const cartItemCount = cartList.reduce((total, item) => total + item.cant, 0);

  return (
    <div className="cart-widget-container">
      <FaShoppingCart className="cart-icon" />{cartItemCount > 0 && (
        <span className="cart-counter">{cartItemCount}</span>
      )}
    </div>
  );
}