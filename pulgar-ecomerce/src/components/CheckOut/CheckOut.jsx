//Componente que se encarga de recolectar información del comprador, validar y enviar el pedido a la base de datos.
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Checkout_Form from "./CheckOut_Form";
import CheckOut_CartList from "./CheckOut_CartList";

const Checkout = () => {
  const { cartList, clearCart } = useCartContext();
  const navigate = useNavigate();
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
        .then((docOrder) => {
          Swal.fire({
            title: "Pedido realizado con éxito.",
            text: `El ID de su orden es: ${docOrder.id}. Por favor guarde este ID`,
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            clearCart();
            navigate("/");
          });
        })
        .catch((reg) =>
          toast.error(`Error al realizar pedido: ${reg}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          })
        );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Checkout_Form
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        <CheckOut_CartList cartList={cartList} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Checkout;
