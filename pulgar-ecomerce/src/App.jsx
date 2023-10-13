import NavBar from './components/NavBar/NavBar'
import ProductListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Brand from './components/Brand/Brand';


function App() {
  const nameOfBrand = 'Street Burger'
  return (
    <>
      <NavBar BrandName={nameOfBrand}/>
      <Brand props={nameOfBrand}/>
      <ProductListContainer greeting='saludo desde App'/>
    </>
  )
}

export default App
