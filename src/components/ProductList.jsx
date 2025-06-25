import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Productos from './Productos'
import './stylesProductList.css'

const ProductList = ({ }) => {

  const { productos, productoFiltrado, busqueda, setBusqueda,handleAddToCart } = useContext(CartContext)
  return (
    <>
      
      <label className="searchLabel">
        <div className="shortcut">⌘K</div>
        <input type="text" className="search_bar" placeholder="Buscar un producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} />
      </label>


      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',
        flexWrap: 'wrap', rowGap: '48px'
      }}>
        {
          productoFiltrado.map(producto => (
            <Productos key={producto.id} producto={producto}
              handleAddToCart={handleAddToCart} />
          ))
        }
      </div>


    </>
  );
};

export default ProductList;

