import './stylesCart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = ({ isOpen, onClose }) => {
  const { cart, handleDeleteFromCart, clearCart } = useContext(CartContext)



  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 className='headline'>Carrito</h2>
        <button className="cartCloseBtn" onClick={onClose}>X</button>
      </div>
      <div className='cart-content'>
        {
          cart.length === 0 ? (
            <p style={{ color: '#39f2ae', textAlign: 'center' }}>Carrito Vacío</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} style={{ color: '#39f2ae' }}>
                    {item.modelo} - ${item.precio} - {item.cantidad}
                    <button onClick={() => handleDeleteFromCart(item)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>
              <div style={{ color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
                <strong>Total: ${cart.reduce((suma, item) => suma + (item.precio * item.cantidad), 0)}</strong>
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                <button onClick={clearCart} style={{ backgroundColor: '#39f2ae', color: '#000', padding: '8px 12px', borderRadius: '6px' }}>
                  Finalizar
                </button>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Cart
