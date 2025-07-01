import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/estaticos/Spinner'
import '../components/stylesProductos.css'

const GaleriaProductos1 = ({cart, productos, cargando, agregarCarrito, eliminarProducto}) => {
  return (
    <>
    <Header carritoItems={cart} eliminarProducto={eliminarProducto}/>
    <section>
        <div className="bannerMan">
            <div className="superposicion"></div>
            <div className="content">
                <h1>Coleccion Hombre</h1>
             </div>
        </div>
    </section>
    <section className="products margenAbajo">
        <h1 className="headline">Relojes para ellos</h1>
        <p className="mainText">Nuestra selección de relojes para hombre te brinda una amplia gama de opciones
             para cualquier estilo. Desde los más deportivos hasta los más sofisticados,
              encuentra el reloj que mejor se adapte a vos</p>
    </section>
  

    {
      cargando ? <Spinner/> :
      <ProductList agregarCarrito={agregarCarrito} productos={productos} />
    }

    <Footer/>

      
    </>
  )
}

export default GaleriaProductos1
