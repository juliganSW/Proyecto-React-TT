import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProductos = ({productos}) => {

const {id} = useParams()
//console.log(id)
const product = productos.find(producto => producto.id == id)



  return (
    <div>
        <h1>Detalle del Producto: {id}</h1>
        {product ? (<h2>{product.modelo}</h2>) : (<p>Producto no encontrado</p>)}
      
    </div>
  )
}

export default DetallesProductos
