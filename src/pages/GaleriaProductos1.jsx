import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/estaticos/Spinner'
import '../components/stylesProductos.css'
import { Helmet } from 'react-helmet-async'

const GaleriaProductos1 = ({ cart, productos, cargando, agregarCarrito, eliminarProducto }) => {
  return (
    <>
      <Helmet>
        <title>Goodstone Watch Store - Colección Hombre</title>
        <meta name="description" content="Explorá la exclusiva colección de relojes para hombre de Goodstone Watches" />
        <meta name="keywords" content="relojes para hombre, colección masculina, moda, elegancia, Goodstone" />
        <meta name="author" content="Goodstone Watches, Inc." />
        <meta property="og:url" content="https://goodstone.vercel.app/galeriaProductos1" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header carritoItems={cart} eliminarProducto={eliminarProducto} />
      <div>
        <div className="bannerMan">
          <div className="superposicion"></div>
          <div className="content">
            <h1>Coleccion Hombre</h1>
          </div>
        </div>
      </div>
      <div className="products margenAbajo">
        <h1 className="headline">Relojes para ellos</h1>
        <p className="mainText">Nuestra selección de relojes para hombre te brinda una amplia gama de opciones
          para cualquier estilo. Desde los más deportivos hasta los más sofisticados,
          encuentra el reloj que mejor se adapte a vos</p>

      </div>


      {
        cargando ? <Spinner /> :
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
      }

      <Footer />


    </>
  )
}

export default GaleriaProductos1
