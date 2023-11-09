import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Brand from "./components/Brand/Brand";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCounter } from "./components/ItemCounter/ItemCounter";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  const nameOfBrand = "Street Burger";
  return (
    <>
      <BrowserRouter>
        <NavBar BrandName={nameOfBrand} />
        <Brand props={nameOfBrand} />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="saludo desde App" />}
          />
          <Route
            path="/category/:cid"
            element={
              <ItemListContainer greeting="saludo desde App" />}
          />
          <Route
            path="/item/:pid"
            element={
              <ItemDetailContainer  />
            }
          />
          <Route path="/cart" element={
            <Cart />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
