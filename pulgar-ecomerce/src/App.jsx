import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Brand from "./components/Brand/Brand";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCounter } from "./components/ItemCounter/ItemCounter";

const onAdd = (cant) => {
  console.log(cant);
};

function App() {
  const nameOfBrand = "Street Burger";
  return (
    <>
      <BrowserRouter>
          <NavBar BrandName={nameOfBrand} />
          <Brand props={nameOfBrand} />
        <Routes>
          <Route path="/" element={
            <ItemListContainer greeting="saludo desde App" />} 
            />
          <Route path="/item:pid" element={
            <ItemCounter initial={0} stock={10} onAdd={onAdd} />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
