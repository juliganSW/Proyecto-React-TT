import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Spinner from '../components/estaticos/Spinner'
import DestacadosList from '../components/DestacadosList'
import Marcas from '../components/Marcas'
import Servicios from '../components/Servicios'

const Home = ({ cart, destacados, cargando, agregarCarrito, eliminarProducto }) => {
  return (
    <>
    <Header agregarCarrito={agregarCarrito} eliminarProducto={eliminarProducto} carritoItems= {cart} />
    <main>
      <h1 className='headline'><span> Modelos más populares</span></h1>
    
     {
      cargando ? <Spinner /> :
       <DestacadosList destacados={destacados} />
       
    } 
    <Marcas />
    <Servicios />

    </main>

    <Footer />
    </>
      
    
  )
}

export default Home

