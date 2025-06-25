import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
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
        }}>
            <h2>Editar Producto</h2>
            <div>
                <label>ID:</label>
                <input
                    type="number"
                    name="id"
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly/>
            </div>
            <div>
                <label>Modelo:</label>
                <input
                    type="text"
                    name="modelo"
                    value={producto.modelo || ''}
                    onChange={handleChange}/>
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio || ''}
                    onChange={handleChange}
                    min="0"/>
            </div>
            <div>
                <label>stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}/>
            </div>
            <div>
                <label>Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}/>
            </div>
           
            <button type="submit">Actualizar Producto</button>
        </form>
    );
}
export default FormularioEdicion;