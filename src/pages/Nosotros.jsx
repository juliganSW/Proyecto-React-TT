import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './stylesNosotros.css'
import nosotros from '../assets/nosotros.jpg'
import { Helmet } from 'react-helmet-async';


const Nosotros = ({cart, eliminarProducto}) => {
  return (
 
    <>
     <Helmet>
  <title>Goodstone Watch Store - Nosotros</title>
  <meta name="description" content="Conocé la historia de Goodstone Watch Store, nuestra visión y compromiso con la calidad." />
  <meta name="keywords" content="sobre nosotros, historia, quienes somos, relojería, Goodstone" />
  <meta name="author" content="Goodstone Watches, Inc." />
  <meta property="og:url" content="https://goodstone.vercel.app/nosotros" />
  <meta property="og:type" content="website" />
</Helmet>
          
    <Header carritoItems={cart} eliminarProducto={eliminarProducto} />
       <section id="nosotros">
            <h1 className="headline">Quiénes Somos</h1>
            <div className="nosotrosContainer">
            <div className="nosotrosImg">
              <img src= {nosotros} alt="Imagen Empresa"/>
            </div>
            <div className="nosotrosTexto">
              <h2>Mejor tienda de relojes online</h2>
              <p> Somos <strong>especialistas en relojes</strong>. Tenemos el reloj que buscas. Contamos con una 
                <strong> amplia gama de relojes de diseño</strong> para <strong>hombres y mujeres</strong>.</p>
                 <p>Trabajamos con las <strong>mejores marcas</strong> de actualidad como <em>Tissot, Guess, Festina, Orient, Seiko, Lacoste, Boss, Omega</em>... 
                Además, disponemos de una <strong>gran colección de relojes inteligentes</strong> de más de 
                30 marcas reconocidas.</p>
                <p>Nuestra <strong>pasión y cariño</strong> por el mundo de los relojes 
                hace que ofrezcamos <strong>los mejores productos</strong> a través de las <strong>marcas más importantes 
                del mercado</strong>. Descubre las <strong>mejores ofertas</strong> para comprar relojes online.</p>
          </div>
            </div>
        </section>
        <Footer />
        </>
  )
}

export default Nosotros
