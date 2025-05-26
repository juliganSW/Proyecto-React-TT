import { useState } from 'react'
import { Link } from 'react-router-dom'
import './stylesEstaticos.css'
import logo from '../../assets/logo.png'
import Cart from '../Cart'
import '../../pages/Login'


const Header = ({ carritoItems, eliminarProducto }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <nav className="menuLateral">
        <div className="logoContainer">
          <img src={logo} alt="Logo-Empresa" />
        </div>
        <ul className="listaItems">
          <li><Link to='/' className='link'>Inicio</Link></li>
          <li><Link to='/galeriaProductos1' className='link'>Colecciones</Link></li>
          <li><Link to='/contacto' className='link'>Contacto</Link></li>
          <li><Link to='/nosotros' className='link'>Nosotros</Link></li>
          <li>
            <button className='link' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
            <Cart eliminarProducto={eliminarProducto} carritoItems={carritoItems || []} isOpen={isCartOpen} onClose={() =>
              setCartOpen(false)} />
              </li>
              <li><Link to='/login' className='link'><i class="fa-solid fa-user"></i></Link></li>         
        </ul>
      </nav>
    </header>
  )         
}             

export default Header
