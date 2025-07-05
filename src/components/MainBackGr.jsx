import React from 'react'
import './stylesMainBackGr.css'
import reloj_nomad40 from'../assets/reloj_nomad40.png'
import { Link } from 'react-router-dom'

const mainBackground = () => {
    return (
        <div className="contenedor">
            <div className="contenedorImg">
                <img src={reloj_nomad40} alt="imagen reloj" />
            </div>
            <div className="superponer"></div>
            <div className="content">
                
                <h1><div>NUEVO NOMAD 40</div>
                    CRONOGRAPH</h1>
                <p>Fabricado para durar: mecánica resistente para un espíritu aventurero.
                    El Nomad 40 Cronograph está listo para los retos de un entrenamiento
                    riguroso y tiene a la vez un estilo actual apto para el uso cotidiano.</p>
               <Link to='/galeriaProductos1'><button className="btnMain">Ver Más</button></Link>
            </div>
        </div>



    )
}

export default mainBackground
