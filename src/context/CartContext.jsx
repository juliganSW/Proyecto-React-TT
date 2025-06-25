import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [destacados, setDestacados] = useState([]);
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)
    const[busqueda, setBusqueda] = useState('')

    useEffect(()=>{
     fetch('/data/data.json')
    .then(response =>response.json())
    .then(datos => {
      setTimeout(() => {
        setProductos(datos)
        setCargando(false)
      }, 2000);
    })
    .catch(error =>{
      console.log('Error', error)
      setCargando(false)
      setError(true)
    })
  },[])
  useEffect(()=>{
     fetch('/data/data2.json')
    .then(response =>response.json())
    .then(datos => {
      setTimeout(() => {
        setDestacados(datos)
        setCargando(false)
      }, 2000);
    })
    .catch(error =>{
      console.log('Error', error)
      setCargando(false)
      setError(true)
    })
  },[])

    const productoFiltrado = productos.filter((producto) => producto?.modelo. 
    toLowerCase().includes(busqueda.toLowerCase()))

    const handleAddToCart = (product) => {

        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {

            setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: product.cantidad } : item));
        } else {
           toast.success(`El producto${product.modelo} se agregó con exito!`)
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    } else {
                        return null; 
                    }
                } else {
                    return item; 
                }
            }).filter(item => item !== null); 
        });
    };

    return (
        <CartContext.Provider 
        value={

            { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuth, destacados,
              productoFiltrado, busqueda, setBusqueda,
             }
        }>
            {children}
        </CartContext.Provider>
    )
}