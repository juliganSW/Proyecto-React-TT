import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos, agregarCarrito }) => {
  return (
    <>
     
      <div style= {{ display:'flex',alignItems:'center',justifyContent:'space-evenly',
                     flexWrap:'wrap',rowGap:'48px'}}>
       {
       productos.map(producto => (
        <Productos key={producto.id} producto={producto} 
                        agregarCarrito={agregarCarrito} />
      ))
      }
      </div>
      
    
    </>
  );
};

export default ProductList;

