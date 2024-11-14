import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Regester/Register.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
