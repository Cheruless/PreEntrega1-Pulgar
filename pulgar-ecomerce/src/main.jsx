import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initlizeFirebase} from './firebase/config.js'

initlizeFirebase();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
