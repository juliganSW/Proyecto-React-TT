import React, { useState, useEffect } from 'react';
import '../pages/stylesAdmin.css'

function FormularioEdicion({ productoSeleccionado, onActualizar, onCerrar }) {
    const [producto, setProducto] = useState(productoSeleccionado);

    useEffect(()=>{
        setProducto(productoSeleccionado)
    },[productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            onActualizar(producto)
        }} 
        className='form-producto'>
            <h2 style={{'textAlign': 'center'}}>Editar Producto</h2>
            <div className='form-group'>
                <label>ID:</label>
                <input
                    type="number"
                    name="id"
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly/>
            </div>
            <div className='form-group'>
                <label>Modelo:</label>
                <input
                    type="text"
                    name="modelo"
                    value={producto.modelo || ''}
                    onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio || ''}
                    onChange={handleChange}
                    min="0"/>
            </div>
            <div className='form-group'>
                <label>stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label>Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}/>
            </div>
            <div className="container-buttons">
            <button type="submit"className='admin-add-button' aria-label='Actualizar producto'>Actualizar</button>
            <button type="button" onClick={onCerrar} className="admin-add-button" aria-label='Cancelar'>Cancelar</button>
            </div>
        </form>
    );
}
export default FormularioEdicion;