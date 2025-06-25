import { useContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contacto from './pages/Contacto'
import Cart from './components/Cart'
import GaleriaProductos1 from './pages/GaleriaProductos1'
import Nosotros from './pages/Nosotros'
import DetallesProductos from './components/DetallesProductos'
import Login from './pages/Login'
import Admin from './pages/Admin'
import RutaProtegida from './auth/RutaProtegida'
import { CartContext } from './context/CartContext'
import { useAuth } from './context/AuthContext';



function App() {
  const { cart, productos, cargando, destacados, error, handleAddToCart, handleDeleteFromCart } = useContext(CartContext)
  
  const { isAuthenticated } = useAuth();

  return (


    <Routes>

      <Route path='/' element={<Home agregarCarrito={handleAddToCart} eliminarProducto={handleDeleteFromCart}
        productos={productos} cart={cart}
        cargando={cargando} destacados={destacados} />} />

      <Route path='/GaleriaProductos1' element={<GaleriaProductos1 agregarCarrito={handleAddToCart} eliminarProducto={handleDeleteFromCart}
        productos={productos} cart={cart}
        cargando={cargando} />} />
      <Route path='/productos/:id' element={<DetallesProductos productos={productos} />} />

      <Route path='/contacto' element={<Contacto cart={cart} eliminarProducto={handleDeleteFromCart} />} />

      <Route path='/nosotros' element={<Nosotros cart={cart} eliminarProducto={handleDeleteFromCart} />} />
      <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida>} />

      <Route path='/login' element={<Login />} />

      <Route path='*' element={<NotFound />} />

    </Routes>



  )
}

export default App
