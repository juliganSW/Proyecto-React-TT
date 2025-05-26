
import './stylesCart.css'


const Cart = ({carritoItems, isOpen, onClose, eliminarProducto}) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 className='headline'>Carrito</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className='cart-content'>
        {
          carritoItems.length === 0 ? (
            <p style={{ color: '#39f2ae',textAlign:'center' }}>Carrito Vacío</p>
          ) : (
            <ul>
              {carritoItems.map((item, index) =>(
                <li key={index} style={{color: '#39f2ae'}} >
                  {item.modelo} - ${item.precio}
                  <button onClick={() =>eliminarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  )
}



export default Cart;
