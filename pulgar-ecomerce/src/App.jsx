import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Brand from "./components/Brand/Brand";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/CartContainer/CartContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./contexts/CartContext/CartContext";

function App() {
  const nameOfBrand = "Street Burger";
  return (
    <>
      <CartContextProvider >
        <BrowserRouter>
          <NavBar BrandName={nameOfBrand} />
          <Brand props={nameOfBrand} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:cid" element={<ItemListContainer />} />
            <Route path="/item/:pid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
