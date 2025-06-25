import React, { useState } from 'react'

const FormularioProducto = ({onAgregar}) => {
    const [producto, setProducto] =useState({
        modelo: '',
        precio: '',
        stock: '',
        imagen: ''
    })
    const [error, setError]= useState({})
    

    const handleChange =(e)=>{
        const{name, value} = e.target 
        setProducto({...producto, [name]: value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        onAgregar(producto)
        setProducto({
            modelo: '',
            precio: '',
            stock: '',
            imagen: ''
            
        })
         setError({});
    }

  return (
     <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label>Modelo:</label><br />
        <input
          type="text"
          name="modelo"
          value={producto.modelo}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
        {error.modelo && <div style={{ color: 'red', fontSize: '14px' }}>{error.modelo}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Precio:</label><br />
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
        {error.precio && <div style={{ color: 'red', fontSize: '14px' }}>{error.precio}</div>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Stock:</label><br />
        <input
          type="number"
          name="stock"
          value={producto.stock}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
        {error.precio && <div style={{ color: 'red', fontSize: '14px' }}>{error.precio}</div>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Imagen:</label><br />
        <input
          type="text"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
        {error.precio && <div style={{ color: 'red', fontSize: '14px' }}>{error.precio}</div>}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Agregar Producto
      </button>
    </form>
      
   
  )
}

export default FormularioProducto
