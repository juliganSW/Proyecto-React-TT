import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './estaticos/Header'
import Servicios from './Servicios'
import Spinner from './estaticos/Spinner'

const DetallesProductos = ({ productos, cargando }) => {
  const { id } = useParams()

   if (cargando) {
    return <Spinner />
  }

  const product = productos.find(producto => producto.id == id)

  return (
    <>
    <Header />
     <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Detalle del Producto</h1>

      {product ? (
        <>
          <h2>{product.modelo}</h2>
          <img
            src={product.imagen}
            alt={`Imagen de ${product.modelo}`}
            style={{ maxWidth: '250px', marginTop: '20px' }} />
            <p><b>Descripcion:&nbsp;</b>{product.detalle}</p>

        </>
      ) : (<p>Producto no encontrado</p>)}
    </div>
    <Servicios />
    </>
  )
}

export default DetallesProductos
