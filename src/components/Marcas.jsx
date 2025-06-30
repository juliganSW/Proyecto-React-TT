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
         
        <h1 class="headline">Trabajamos con las mejores marcas</h1>
        <div class="contenedorMarcas">
            <div class="boxMarcas">
                <img src={citizenLogo} alt="logo Citizen"/>
            </div>
            <div class="boxMarcas">
                <img src={festinaLogo} alt="logo Festina"/>
            </div>
            <div class="boxMarcas">
                <img src={bulovaLogo} alt="logo Bulova"/>
            </div>
            <div class="boxMarcas">
                <img src={swatchLogo} alt="logo Swatch"/>
            </div>
            <div class="boxMarcas">
                <img src={guessLogo} alt="logo Guess"/>
            </div>
            <div class="boxMarcas">
                <img src={bossLogo} alt="logo Boss"/>
            </div>
            <div class="boxMarcas">
                <img src={omegaLogo} alt="logo Omega"/>
            </div>
           <div class="boxMarcas">
                <img src={seikoLogo} alt="logo Seiko"/>
            </div>
            <div class="boxMarcas">
                <img src={orientLogo} alt="logo Orient"/>
            </div>
            <div class="boxMarcas">
                <img src={tissotLogo} alt="logo Tissot"/>
            </div>
            <div class="boxMarcas">
                <img src={lacosteLogo} alt="logo Lacoste"/>
            </div>
            <div class="boxMarcas">
                <img src={calvinLogo} alt="Logo Calvin Klein"/>
            </div>
        </div>
    
      
    </div>
  )
}

export default Marcas
