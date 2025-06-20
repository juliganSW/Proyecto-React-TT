import React, { useState, useEffect } from "react";
import FormularioProducto from "../components/FormularioProducto";

const Admin = () => {
    const [producto, setProducto] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch("/data/data.json")
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

    const agregarProducto = async (producto) =>{
      try{
           const respuesta = await fetch('https://682ac383ab2b5004cb379c77.mockapi.io/products',{
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(producto)
           })
           if(!respuesta.ok){
            throw new Error('No se pudo agregar el producto')
           }
           const data = await respuesta.json()
           alert('Producto agregado')

      }catch(error){
        console.log(error.mensaje);

      }
        
        
            
        }
    

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
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
                                    <button className="editButton">Editar</button>

                                    <button className="deleteButton">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={()=> setOpen(true)}>Agregar producto</button>
            {open && (<FormularioProducto onAgregar={agregarProducto}/>)}
        </div>
    );
};

export default Admin;
