import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/dashboard.jsx'
import Login from './Pages/Login/Login.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import { Toaster } from 'react-hot-toast'


const router = createBrowserRouter([
   {
    path: "/",
    element: <Dashboard />
   },

   {
    path: "/login",
    element: <Login />
   },
   
   {
    path: "/registration",
    element: <Registration />
   },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Toaster />
    <RouterProvider router={router} />
   
  </StrictMode>,
)
