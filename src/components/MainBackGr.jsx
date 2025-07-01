import React from 'react'
import './stylesMainBackGr.css'
import reloj_nomad40 from'../assets/reloj_nomad40.png'

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
                <button className="btnMain"><a href="./pages/coleccion-hombre.html">Ver Más</a></button>
            </div>
        </div>



    )
}

export default mainBackground
