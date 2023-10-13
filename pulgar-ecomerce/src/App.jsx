import { useState } from 'react';

import NavBar from './components/NavBar/NavBar'
import Brand from './components/Brand/Brand'
import ProductListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
      <Brand titulo='Hold'></Brand>
      <ProductListContainer greeting='saludo desde App'/>
    </>
  )
}

export default App
