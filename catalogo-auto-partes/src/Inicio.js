import React from 'react';
import fondo from './fondo.jpg';
import './Inicio.css';

function Inicio() {
  return (
    <div className="inicio-section">
      <img src={fondo} alt="Imagen de fondo" className="inicio-image" />
    </div>
  );
}

export default Inicio;
