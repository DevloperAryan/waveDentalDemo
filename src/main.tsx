import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Appointment from './pages/Appointment.tsx'
import Gallery from './pages/Gallery.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <App/>,
    children:[
      {path:'',element:<Home/>},
      {path:'/Appointment',element:<Appointment/>},
      {path:'/Gallery',element:<Gallery/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
