import React, { useState } from 'react'

const FormularioProducto = ({onAgregar}) => {
    const [producto, setProducto] =useState({
        modelo: '',
        precio: '',
        descripcion: ''
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
            descripcion: ''
            
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
        <label>Descripción:</label><br />
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          rows={3}
          style={{ width: '100%', padding: '8px' }}
        />
        {error.descripcion && <div style={{ color: 'red', fontSize: '14px' }}>{error.descripcion}</div>}
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
