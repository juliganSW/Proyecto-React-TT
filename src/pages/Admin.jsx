import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/estaticos/Spinner'
import './stylesAdmin.css';
import { TbLayoutDashboard } from "react-icons/tb";
import { TbLayoutGridAdd } from "react-icons/tb";
import { Helmet } from 'react-helmet-async'


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
    <>
      <Helmet>
        <title>Goodstone Admin Panel</title>
        <meta name="description" content="Panel administrativo para gestionar productos." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <nav className="admin-nav">
        <div className="admin-icon">
          <TbLayoutDashboard />
        </div>
        <button onClick={logout} className="admin-nav-button" aria-label="Cerrar sesión">Cerrar sesión</button>
      </nav>
      <div className="admin-container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1 className="admin-title">Panel Administrativo</h1>
            {/* <button className="admin-add-button" aria-label="Agregar Producto" onClick={() => setOpen(true)}>Agregar producto</button> */}
            

            <ul className="admin-list">
              {producto.map((product) => (
                <li key={product.id} className="admin-listItem">
                  <img
                    src={product.imagen}
                    alt='imagen de producto'
                    className="admin-listItemImage" />
                  <span>{product.modelo}</span>
                  <span>${product.precio}</span>
                  <span>{product.stock}</span>
                  <div className="admin-buttons">
                    <button className="admin-editButton" aria-label="Editar producto" onClick={() => {
                      setSelected(product);
                      setOpenEditor(true)
                    }}>Editar</button>

                    <button className="admin-deleteButton" aria-label="Eliminar producto" onClick={() =>
                      eliminarProducto(product.id)}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {open && (<div className="modal-overlay"><FormularioProducto onAgregar={agregarProducto} onCerrar={() => setOpen(false)} />
        </div>)}
        {openEditor && selected && (<div className="modal-overlay"><FormularioEdicion productoSeleccionado={selected}
          onActualizar={actualizarProducto} onCerrar={() => {
            setOpenEditor(false)
          }} />
        </div>
        )}
      </div>
      <div className="tooltip">
      <button>
      <TbLayoutGridAdd  className="add-adminBtn pulso" 
      aria-label="Agregar producto"  onClick={() => setOpen(true)} /></button>
      <span className="tooltip-text">Agregar producto</span>
      </div>
       
    </>
  )
};

export default Admin;
