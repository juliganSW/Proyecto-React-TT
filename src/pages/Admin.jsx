import React, { useState, useEffect, useContext } from "react";

import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/estaticos/Spinner'

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
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
      <nav>
      <h2>Admin</h2>
      <button onClick={logout}>Cerrar sesión</button>
      </nav>

          <h1 className="title">Panel Administrativo</h1>

          <ul className="list">
            {producto.map((product) => (
                
              <li key={product.id} className="listItem">
                <img
                  src={product.imagen}
                  alt='imagen de producto'
                  className="listItemImage"
                />
                <span>{product.modelo}</span>
                <span>${product.precio}</span>
                <div>
                  <button className="editButton" onClick={() => {
                    setSelected(product);
                    setOpenEditor(true);
                  }}>Editar</button>

                  <button className="deleteButton" onClick={() =>
                    eliminarProducto(product.id)}>Eliminar</button>
                </div>
              </li>
))}
          </ul>
        </>
      )}
      <button onClick={() => setOpen(true)}>Agregar producto</button>
      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
      {openEditor && selected && (<FormularioEdicion productoSeleccionado={selected}
        onActualizar={actualizarProducto} />)}
    </div>
  )
};

export default Admin;
