import React , {useState}from 'react'
import './stylesProductos.css'
import { Link } from 'react-router-dom';

const Productos = ({ producto, handleAddToCart }) => {
  const [cantidad, setCantidad] = useState(1);
  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="all-products">
      <div className="product">
        {/* <div className='fav-container'>
          <i className="fa-solid fa-heart"></i>
        </div> */}
        <img src={producto.imagen} alt="imagen reloj" />
        <div className="product-info">
          <h2 className="product-title">{producto.modelo}</h2>
          <p className="product-off">15%OFF</p>
          <p className="product-shipping">Envío Gratis</p>
          <p>${producto.precio}</p>
          <p style={{color:'#ffff'}}>{producto.stock}</p> 
          <div>
            <button onClick={decrease}>-</button>
            <span>{cantidad}</span>
            <button onClick={increase}>+</button>
          </div>
          <button onClick={() => handleAddToCart(producto)} className="product-btn agregar-btn">Agregar al Carrito</button>
          <div><Link to = {`/productos/${producto.id}`} className='link'>Ver más</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Productos
