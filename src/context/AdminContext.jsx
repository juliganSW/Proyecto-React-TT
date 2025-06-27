import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
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
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "El producto se agregó exitosamente!",
                showConfirmButton: false,
                timer: 1000,
                background: "#282f44", 
                color: "#fff",           
                iconColor: "#39f2ae", 
               
            });
            
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
                    Swal.fire({
                position: "top-end",
                icon: "error",
                title: "El producto se eliminó exitosamente!",
                showConfirmButton: false,
                timer: 1000,
                background: "#282f44", 
                color: "#fff",           
                iconColor: "#FF0000", 
                border: "2px solid #39f2ae",
            });
            
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
        <AdminContext.Provider value={{
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

        }}>
            {children}
        </AdminContext.Provider>
    )

}