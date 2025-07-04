import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './stylesEstaticos.css'
import logo from '../../assets/logo.png'
import Cart from '../Cart'
import '../../pages/Login'


const Header = ({ carritoItems, eliminarProducto }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="cubierta" >
        <input type="checkbox" id="btn" hidden />
        {!isCartOpen && (
          <label htmlFor="btn" className="menuBtn">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </label>
        )}

         <nav className="menuLateral">
          <div className="logoContainer">
            <img src={logo} alt="Logo-Empresa" />
          </div>
          <ul className="listaItems">
            <li><NavLink to='/' className='link'>Inicio</NavLink></li>

            <li>
              <NavLink to='/galeriaProductos1' className='link' end>Colecciones▾</NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to='/galeriaProductos1' className='link'>Hombres</NavLink>
                </li>
                <li>
                  <NavLink to='/galeriaProductos2' className='link'>Mujeres</NavLink>
                </li>
              </ul>
            </li>


            <li><NavLink to='/contacto' className='link'>Contacto</NavLink></li>
            <li><NavLink to='/nosotros' className='link'>Nosotros</NavLink></li>

            <li>
              <button className='link' onClick={() => setCartOpen(true)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
            </li>

            <li><NavLink to='/login' className='link'><i className="fa-solid fa-user"></i></NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
