import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import Home from './pages/Home'
/*import  { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
