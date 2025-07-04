import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Productos from './Productos'
import './stylesProductList.css'
import Pagination from 'react-bootstrap/Pagination'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const ProductList = ({ }) => {

  const { productos, productoFiltrado, busqueda, setBusqueda, handleAddToCart } = useContext(CartContext)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const currentProducts = productoFiltrado.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(productoFiltrado.length / itemsPerPage)


  return (
    <>

      <label className="searchLabel">
        <div className="shortcut">⌘K</div>
        <input
          type="text"
          className="search_bar"
          placeholder="Buscar un producto..."
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            setCurrentPage(1); //Con esto se resetea la paginación al filtrar 
          }} />
      </label>


      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',
        flexWrap: 'wrap', rowGap: '48px'
      }}>
        {
          currentProducts.map(producto => (
            <Productos key={producto.id} producto={producto}
              handleAddToCart={handleAddToCart} />
          ))
        }
      </div>

      <Pagination>
        <Pagination.Item
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}>
          <IoIosArrowBack />
          &nbsp;Anterior

        </Pagination.Item>

        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}>
            {/* {i + 1} */}
          </Pagination>
        ))}

        <Pagination.Item
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}>
          Siguiente&nbsp;
          <IoIosArrowForward />

        </Pagination.Item>
      </Pagination>
  </>
  );
};

export default ProductList;

