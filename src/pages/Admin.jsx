import React, { useState, useEffect } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import Spinner from '../components/estaticos/Spinner'

const Admin = () => {
  const [producto, setProducto] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [openEditor, setOpenEditor] = useState(false)
  const apiUrl = 'https://682ac383ab2b5004cb379c77.mockapi.io/products'

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProducto(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch('https://682ac383ab2b5004cb379c77.mockapi.io/products', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(producto)
      })
      if (!respuesta.ok) {
        throw Error('No se pudo agregar el producto')
      }
      const data = await respuesta.json()
      alert('Producto agregado correctamente')
      cargarProducto()

    } catch (error) {
      console.log(error.mensaje);

    }
  }

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm('Seguro que desea eliminar este producto?')
    if (confirmar) {
      try {
        const respuesta = await fetch(`https://682ac383ab2b5004cb379c77.mockapi.io/products/${id}`, {
          method: 'DELETE',
        })
        if (!respuesta.ok) throw Error('Error al eliminar el producto')
        alert('El producto se eliminó correctamente')
        cargarProducto()

      } catch (error) {
        alert('Algo salió mal al eliminar el producto')
      }
    }
  }

  const actualizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(producto)
      })
      if (!respuesta.ok) throw Error('Error al actualizar el producto')
      const data = await respuesta.json()
      alert('Producto actualizado correctamente')
      setOpenEditor(false)
      setSelected(null)
      cargarProducto()
    }
    catch (error) {
      console.log(error.message)

    }

  }
  const cargarProducto = async () => {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setProducto(data)

    } catch (error) {
      console.log('Error al cargar producto', error)

    }
  }

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>

          <h1 className="title">Panel Administrativo</h1>

          <ul className="list">
            {producto.map((product) => (
              <li key={product.id} className="listItem">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="listItemImage"
                />
                <span>{product.nombre}</span>
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
