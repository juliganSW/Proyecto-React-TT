import React, { useState, useEffect, useContext } from "react";

import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/estaticos/Spinner'
import './Admin.css';



const Admin = () => {
  const { setIsAuth } = useContext(CartContext)
  const navigate = useNavigate()
  const { logout } = useAuth()


  const {
    loading,
    producto,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    selected,
    setSelected,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    
    } = useContext(AdminContext)
  

  return (
    <div className="admin-container">
      {loading ? (
        <Spinner />
      ) : (
        <>
      <nav className="admin-nav">
      <h2>Admin</h2>
      <button onClick={logout}>Cerrar sesión</button>
      </nav>
      

          <h1 className="admin-title">Panel Administrativo</h1>
          
          
          <ul className="admin-list">
            {producto.map((product) => (
                
              <li key={product.id} className="admin-listItem">
                <img
                  src={product.imagen}
                  alt='imagen de producto'
                  className="admin-listItemImage"
                />
                <span>{product.modelo}</span>
                <span>${product.precio}</span>
                <span>{product.stock}</span>
                <div className="admin-buttons">
                  <button className="admin-editButton" onClick={() => {
                    setSelected(product);
                    setOpenEditor(true);
                  }}>Editar</button>

                  <button className="admin-deleteButton" onClick={() =>
                    eliminarProducto(product.id)}>Eliminar</button>
                </div>
              </li>
))}
          </ul>
        </>
      )}
      <button className="admin-add-button" onClick={() => setOpen(true)}>Agregar producto</button>
      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
      {openEditor && selected && (<FormularioEdicion productoSeleccionado={selected}
        onActualizar={actualizarProducto} />)}
    </div>
  )
};

export default Admin;
