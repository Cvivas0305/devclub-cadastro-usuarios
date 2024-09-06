
import { jsxDEV } from "react/jsx-dev-runtime";
import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/index.js'
import ListUsers from './pages/ListUsers'


const router = createBrowserRouter([
    {
       path: '/', 
       element: <Home />
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }

]);

export default router
