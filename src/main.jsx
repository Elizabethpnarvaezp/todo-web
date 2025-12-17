import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Crea la raíz de React en el elemento con id 'root' del HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />{/* Renderiza el componente principal */}
  </React.StrictMode>,
)
