import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/estaticos/Spinner'

const GaleriaProductos1 = ({cart, productos, cargando, agregarCarrito, eliminarProducto}) => {
  return (
    <>
    <Header carritoItems={cart} eliminarProducto={eliminarProducto}/>
    <h1 className='headline'>Colección para hombres</h1>

    {
      cargando ? <Spinner/> :
      <ProductList agregarCarrito={agregarCarrito} productos={productos} />
    }

    <Footer/>

      
    </>
  )
}

export default GaleriaProductos1
