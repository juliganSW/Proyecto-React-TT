import React from 'react'
import './stylesServicios.css'
import reloj_classic from '../assets/reloj_classic.jpg'
import reloj_sport from '../assets/reloj_sport.jpg'
import reloj_chrono from '../assets/reloj_chrono.jpg'
import reloj_acero from '../assets/reloj_acero.jpg'
import reloj_tourbillon from '../assets/reloj_tourbillon.jpg'

const Categorias = () => {
  return (
     <div className="categorias">
        <h1 className="headline">Nuestras categorías</h1>
        <div className="categoriasContainer">
           <div className="categoria">
            <h2>Classic</h2>
             <img src={reloj_classic} alt="imagen de reloj"/>
             </div>
            <div className="categoria">
                <h2>Sport</h2>
                <img src={reloj_sport} alt="imagen de reloj"/>
            </div>
            <div className="categoria">
                <h2>Chrono</h2>
                <img src={reloj_chrono} alt="imagen de reloj"/>
            </div>
            <div className="categoria">
                <h2>Acero</h2>
                <img src={reloj_acero} alt="imagen de reloj"/>
            </div>
             <div className="categoria">
                <h2>Tourbillon</h2>
                <img src={reloj_tourbillon} alt="imagen de reloj"/>
            </div> 
        </div>
        </div>
  )
}

export default Categorias
