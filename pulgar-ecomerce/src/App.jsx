import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Brand from "./components/Brand/Brand";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/CartContainer/CartContainer";
import { CartContextProvider } from "./contexts/CartContext/CartContext";
import CheckOut from "./components/CheckOut/CheckOut";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.css";

function App() {
  const nameOfBrand = "Street Burger";
  return (
    <>
      <ToastContainer />
      <CartContextProvider >
        <BrowserRouter>
          <NavBar BrandName={nameOfBrand} />
          <Brand props={nameOfBrand} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:cid" element={<ItemListContainer />} />
            <Route path="/item/:pid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;