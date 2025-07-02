import React from 'react'
import './stylesFormulario.css'
import img_contacto from '../assets/img_contacto.png'


const Formulario = () => {
    return (
        <section className="contacto">
            <div className="contenedor_img">
                <img src={img_contacto} alt="imagen relojes" className="contacto_img" />
            </div>
            <div className="contenedor_form">
                <h1 className="contacto_titulo">Contactate con nosotros</h1>

                <form action="" method="" className="contacto_form" id="form">
                    <div className="form_input_linea">
                        <label for="nombre" className="contacto_label">Nombre</label>
                        <input type="text" name="nombre" id="nombre" className="contacto_input" />
                        <span id="mensajeNombre"></span>
                    </div>
                    <div className="form_input_linea">
                        <label for="apellido" className="contacto_label">Apellido</label>
                        <input type="text" name="apellido" id="apellido" className="contacto_input" />
                        <span id="mensajeApellido"></span>
                    </div>
                    <div className="form_input_linea">
                        <label for="email" className="contacto_label">Email</label>
                        <input type="text" name="email" id="email" className="contacto_input" />
                        <span id="mensajeEmail"></span>
                    </div>
                    <div className="form_input_linea">
                        <label for="asunto" className="contacto_label">Asunto&nbsp;</label>
                        <select className="custom">
                            <option selected>Elija una opción</option>
                            <option value="2">Soporte</option>
                            <option value="3">Ventas</option>
                            <option value="4">Comentarios</option>
                        </select>

                    </div>
                    <div className="form_input_linea">
                        <label for="descripcion" className="contacto_label">Mensaje</label>
                        <textarea type="text" name="descripcion" id="descripcion" className="contacto_input_textArea" placeholder="Escriba su mensaje"></textarea>
                        <span id="mensajeDescripcion"></span>
                    </div>
                    <div className="form_botones">
                        <button type="submit" className="contacto_submit_boton" id="btn-enviar">Enviar</button>
                        <button type="reset" className="contacto_submit_boton">Limpiar</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Formulario
