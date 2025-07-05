import React from 'react'
import bulovaLogo from '../assets/bulovaLogo.png'
import calvinLogo from '../assets/calvinLogo.png'
import citizenLogo from '../assets/citizenLogo.png'
import festinaLogo from '../assets/festinaLogo.png'
import guessLogo from '../assets/guessLogo.png'
import bossLogo from '../assets/bossLogo.png'
import lacosteLogo from '../assets/lacosteLogo.png'
import omegaLogo from '../assets/omegaLogo.png'
import orientLogo from '../assets/orientLogo.png'
import seikoLogo from '../assets/seikoLogo.png'
import swatchLogo from '../assets/swatchLogo.png'
import tissotLogo from '../assets/tissotLogo.png'



const Marcas = () => {
    return (
        <div>
            <div className="contenedorMarcas">
                <div className="boxMarcas">
                    <img src={citizenLogo} alt="logo Citizen" />
                </div>
                <div className="boxMarcas">
                    <img src={festinaLogo} alt="logo Festina" />
                </div>
                <div className="boxMarcas">
                    <img src={bulovaLogo} alt="logo Bulova" />
                </div>
                <div className="boxMarcas">
                    <img src={swatchLogo} alt="logo Swatch" />
                </div>
                <div className="boxMarcas">
                    <img src={guessLogo} alt="logo Guess" />
                </div>
                <div className="boxMarcas">
                    <img src={bossLogo} alt="logo Boss" />
                </div>
                <div className="boxMarcas">
                    <img src={omegaLogo} alt="logo Omega" />
                </div>
                <div className="boxMarcas">
                    <img src={seikoLogo} alt="logo Seiko" />
                </div>
                <div className="boxMarcas">
                    <img src={orientLogo} alt="logo Orient" />
                </div>
                <div className="boxMarcas">
                    <img src={tissotLogo} alt="logo Tissot" />
                </div>
                <div className="boxMarcas">
                    <img src={lacosteLogo} alt="logo Lacoste" />
                </div>
                <div className="boxMarcas">
                    <img src={calvinLogo} alt="Logo Calvin Klein" />
                </div>
            </div>


        </div>
    )
}

export default Marcas
