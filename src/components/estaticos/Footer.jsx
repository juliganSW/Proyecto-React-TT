import React from 'react'
import './stylesEstaticos.css'
import masterLogo from '../../assets/masterLogo.png'
import visaLogo from '../../assets/visaLogo.png'
import cabalLogo from '../../assets/cabalLogo.png'
import shoppingLogo from '../../assets/shoppingLogo.png'
import facilLogo from '../../assets/facilLogo.png'
import mpLogo from '../../assets/mpLogo.png'
import naranjaLogo from '../../assets/mpLogo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="arriba-izq">
          <p>Seguinos</p>
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook fa-2xl"></i></a></li>
            <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram fa-2xl"></i></a></li>
            <li><a href="https://www.x.com/" target="_blank"><i className="fa-brands fa-x-twitter fa-2xl"></i></a></li>
            <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa-brands fa-pinterest fa-2xl"></i></a></li>
          </ul>
        </div>
        <div className="arriba-der">
          <div className="newsletter">
            <i className="fa-solid fa-envelope fa-xl"></i>
            <p>Suscríbase a la newsletter</p>
          </div>
          <div className="email-container">
            <form action="#">
              <input type="email" placeholder="Escriba su correo aqui..." name="email-input" className="email-input"/>
                <input type="submit" value="Suscribirse" className="btnEmail"/>
                </form>
              </div>
          </div>
          <div className="centro-izq">
            <p className="list-title">Información</p>
            <ul>
              <li><p>Preguntas Frecuentes</p></li>
              <li><p>Solicitar un Cambio</p></li>
              <li><p>Servicio Técnico</p></li>
              <li><p>Botón de arrepentimiento</p></li>
            </ul>
          </div>
          <div className="centro-medio">
            <p className="list-title">Somos Goodstone</p>
            <address>
              <p>Goodstone watch store</p>
              <p>Dirección: Avenida Evergreen 742, CABA</p>
              <p>Teléfono: +54 123 456 7890</p>
              <p>Email: goodstone@gmail.com</p>
            </address>
          </div>
          <div className="centro-der">
            <p className="list-title">Medios de Pago</p>
            <ul>
              <li><img src={masterLogo} alt="logo-mastercard"/></li>
              <li><img src={visaLogo} alt="logo visa"/></li>
              <li><img src={cabalLogo}alt="logo cabal"/></li>
              <li><img src={naranjaLogo} alt="logo tarjeta naranja"/></li>
              <li><img src={shoppingLogo} alt="logo tarjeta shopping"/></li>
              <li><img src={facilLogo} alt="logo pago facil"/></li>
              <li><img src={mpLogo} alt="logo mercado pago"/></li>
            </ul>
          </div>
          <div>
            <a href="#" target="_blank"><i className="fa-brands fa-whatsapp pulso"></i></a>
          </div>
          <div className="abajo">
            <div>
              <a href="#top"><i className="fa-solid fa-circle-up back_to_top"></i></a>
            </div>
            <div className="abajo-content">
              <p>© 2024 Goodstone watch store. Todos los derechos reservados. Web by Julian Piedrabuena&nbsp;<i className="fa-solid fa-jedi"></i></p>
            </div>
          </div>
        </div>
        

    </footer>

  )
}

export default Footer
