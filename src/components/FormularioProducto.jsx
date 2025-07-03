import React, { useState } from 'react';
import '../pages/stylesAdmin.css'

const FormularioProducto = ({ onAgregar, onCerrar }) => {
  const [producto, setProducto] = useState({
    modelo: '',
    precio: '',
    stock: '',
    imagen: ''
  })
  const [error, setError] = useState({})


  const handleChange = (e) => {
    const { name, value } = e.target
    setProducto({ ...producto, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {};
    if (!producto.modelo) newErrors.modelo = 'Modelo requerido';
    if (!producto.precio) newErrors.precio = 'Precio requerido';
    if (!producto.stock) newErrors.stock = 'Stock requerido';
    //if (!producto.imagen) newErrors.imagen = 'URL de imagen requerida';
    
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

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
    <form onSubmit={handleSubmit} className='form-producto'>
      <div className='form-group'>
         <h2 style={{'textAlign': 'center'}}>Ingresar Producto</h2>
        <label>Modelo:</label><br />
        <input
          type="text"
          name="modelo"
          value={producto.modelo}
          onChange={handleChange} />
        {error.modelo && <div className="form-error">{error.modelo}</div>}
      </div>

      <div className='form-group'>
        <label>Precio:</label><br />
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange} />
        {error.modelo && <div className="form-error">{error.precio}</div>}
      </div>

      <div className='form-group'>
        <label>Stock:</label><br />
        <input
          type="number"
          name="stock"
          value={producto.stock}
          onChange={handleChange} />
        {error.modelo && <div className="form-error">{error.stock}</div>}

      </div>
      <div className='form-group'>
        <label>Imagen:</label><br />
        <input
          type="text"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange} />
        {error.modelo && <div className="form-error">{error.imagen}</div>}

      </div>
       <div className="container-buttons">
      <button type="submit" className='admin-add-button'>Agregar</button>
      <button type="button" onClick={onCerrar} className="admin-add-button">Cancelar</button>
      </div>
    </form>


  )
}

export default FormularioProducto
