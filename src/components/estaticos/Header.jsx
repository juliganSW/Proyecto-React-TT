import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './stylesEstaticos.css'
import logo from '../../assets/logo.png'
import Cart from '../Cart'
import '../../pages/Login'
import { useLocation } from 'react-router-dom'; // useLocation es para detectar la ruta actual




const Header = ({ carritoItems, eliminarProducto }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  return (
  
    <header>
      <div className="cubierta" >
        <input type="checkbox" id="btn" hidden />
        {!isCartOpen && (
          <label htmlFor="btn" className="menuBtn" aria-label='Abrir menú de navegación'>
            <i className="fas fa-bars" aria-hidden='true'></i>
            <i className="fas fa-times" aria-hidden='true'></i>
          </label>
        )}

        <nav className="menuLateral">
          <div className="logoContainer">
            <NavLink to='/' aria-label='Ir a inicio'><img src={logo} alt="Logo-Empresa" /></NavLink>
          </div>
          <ul className="listaItems">
            <li><NavLink to='/' className='link' aria-label='Ir a inicio'>Inicio</NavLink></li>
            <li>
              {/* Si la ruta comienza con "/galeriaProductos",
           se aplica la clase "active" para que el ítem quede resaltado */}
              <NavLink to='/galeriaProductos1'
                className={location.pathname.startsWith
                  ('/galeriaProductos') ? 'link active' : 'link'}>Colecciones▾</NavLink>

              <ul className="dropdown">
                <li>
                  <NavLink to='/galeriaProductos1' className='link' aria-label='Ir a colección hombres'>Hombres</NavLink>
                </li>
                <li>
                  <NavLink to='/galeriaProductos2' className='link' aria-label='Ir a colección mujeres '>Mujeres</NavLink>
                </li>
              </ul>
            </li>
            <li><NavLink to='/contacto' className='link' aria-label='Ir a contacto'>Contacto</NavLink></li>
            <li><NavLink to='/nosotros' className='link' aria-label='ir a nosotros'>Nosotros</NavLink></li>
            <li>
              <button className='link' aria-label='Abrir carrito' onClick={() => setCartOpen(true)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
            </li>
            <li><NavLink to='/login' className='link' aria-label='Ir a login'><i className="fa-solid fa-user"></i></NavLink></li>
            <li><img src={logo} alt="Logo-Empresa" className='logoMenu' hidden /></li>
          </ul>
        </nav>
      </div>
      
    </header>
    

  )
}

export default Header
