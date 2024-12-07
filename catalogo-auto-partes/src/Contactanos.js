import React from 'react';
import './Contactanos.css';
import fondo2 from './Performance day.jpg'

function Contactanos() {
  return (
    <div className="contactanos-container">

            <img src={fondo2} alt="Imagen de fondo" className="contactanos-image" />
   <p className="contactanos-message">
     Conoce nuestro amplio catálogo de accesorios,
     solo <span id="texto-resaltado">Haz clic en el <span>botón</span> para continuar.</span>
     y alguien te atenderá lo más pronto posible.
   </p>


      <a
        href="https://wa.me/525519640853?text=Hola,%20tengo%20una%20consulta%20sobre%20sus%20productos."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default Contactanos;
