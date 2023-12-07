import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

//TODO: MODULARIZAR CODIGO PARA ENTREGA FINAL

const Checkout = () => {
  const { cartList } = useCartContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
  });

  const totalPrice = cartList.reduce((total, product) => {
    return total + product.price * product.cant;
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiamos los errores al cambiar el valor del campo
    setErrors({ ...errors, [name]: "" });
  };

  // LEER https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

  const validateText = (value, fieldName) => {
    const regex = /^[a-zA-Z ]*$/;
    if (!regex.test(value)) {
      setErrors({
        ...errors,
        [fieldName]: "Solo se permiten letras y espacios",
      });
      return false;
    }
    return true;
  };

  const validatePhoneNumber = (value, fieldName) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(value)) {
      setErrors({ ...errors, [fieldName]: "Solo se permiten números" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    const order = {};

    // Se valida campos antes de enviar el form
    const isFirstNameValid = validateText(formData.firstName, "firstName");
    const isLastNameValid = validateText(formData.lastName, "lastName");
    const isPhoneNumberValid = validatePhoneNumber(
      formData.phoneNumber,
      "phoneNumber"
    );

    if (isFirstNameValid && isLastNameValid && isPhoneNumberValid) {
      order.buyer = formData;
      order.items = cartList.map((product) => ({
        id: product.id,
        price: product.price * product.cant,
        cant: product.cant,
      }));
      order.total = totalPrice;

      toast.info("Procesando pedido...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      addDoc(queryCollection, order)
        .then(() => toast.success("¡Pedido realizado con éxito!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
        }))
        .catch((reg) => toast.error(`Error al realizar pedido: ${reg}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
        }));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>Datos del Comprador</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Dirección de Envío
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Número de Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Confirmar Compra
            </button>
          </form>
        </div>

        <div className="col-md-5">
          {/* Sección del carro */}
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Tu pedido</span>
            <span className="badge bg-primary rounded-pill">
              {cartList.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {/* Mapeo de productos en el carro */}
            {cartList.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between lh-sm"
              >
                {/* Detalles del producto en el carrito */}
                <div>
                  <h6 className="my-0">{product.name}</h6>
                  <small className="text-body-secondary">{product.desc}</small>
                </div>
                <span className="text-body-secondary">
                  ${product.price * product.cant}
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total: </span>
              <strong>${totalPrice}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
