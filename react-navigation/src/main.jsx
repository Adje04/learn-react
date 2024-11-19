import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Apropos from './Components/Apropos.jsx'
import Blog from './Components/Blog.jsx'
import Article from './Components/Article.jsx'
import Errors from './errors/errors.jsx'
import Contact from './Components/Contact.jsx'
import Error404 from './errors/Error404.jsx'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errors />
  },
  {
    path: "*",
    element: <Error404 />,

  },
  {
    path: "/apropos",
    element: <Apropos />,
    children: [
      {
        path: "/apropos/contact",
        element: <Contact />,
      }
    ]
  },
  {
    path: "/blog",
    element: <ProtectedRoute isLogin={false} >
      <Blog />
    </ProtectedRoute>
  },
  {
    path: "/blog/:id",
    element: <Article />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)


