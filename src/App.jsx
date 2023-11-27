import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Copywriting from './pages/copywriting/Copywriting'
import Home from './pages/Home/Home'
import Web from './pages/web/web'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route exact path='/' element={<Home />} />
        <Route path='copywriting' element={<Copywriting />} />
        <Route path='web' element={<Web />} />
        <Route path='services' element={<ServicePage />} />
        <Route path='contact' element={<ContactPage />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
