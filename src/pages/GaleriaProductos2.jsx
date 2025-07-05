import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/estaticos/Spinner'
import '../components/stylesProductos.css'
import { Helmet } from 'react-helmet-async'

const GaleriaProductos2 = ({ cart, productos, cargando, agregarCarrito, eliminarProducto }) => {
  return (
    <>
      <Helmet>
        <title>Goodstone Watch Store - Colección Mujer</title>
        <meta name="description" content="Explorá la exclusiva colección de relojes para mujer de Goodstone Watches" />
        <meta name="keywords" content="relojes para mujer, colección femenina, moda, elegancia, Goodstone" />
        <meta name="author" content="Goodstone Watches, Inc." />
        <meta property="og:url" content="https://goodstone.vercel.app/galeriaProductos2" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header carritoItems={cart} eliminarProducto={eliminarProducto} />
      <div>
        <div className="banner">
          <div className="superposicion"></div>
          <div className="content">
            <h1>Coleccion Mujer</h1>
          </div>
        </div>
      </div>
      <div className="products margenAbajo">
        <h1 className="headline">Relojes para ellas</h1>
        <p className="mainText">Descubre el reloj que te define.
          Nuestra colección para mujer te ofrece una amplia variedad de estilos,
          desde los más clásicos y elegantes hasta los más modernos y atrevidos.</p>
      </div>
      {
        cargando ? <Spinner /> :
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
      }
      <Footer />
    </>
  )
}

export default GaleriaProductos2
