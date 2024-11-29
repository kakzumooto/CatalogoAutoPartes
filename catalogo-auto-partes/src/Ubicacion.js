import React from 'react';
import './ubicacion.css';

function Ubicacion() {
  return (
    <div className="map-container">
      <iframe
        title="Ubicación en Google Maps"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.314052281076!2d-99.20836383043249!3d19.659071798854335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21f36c589766f%3A0x4c63f7d97cce52f0!2sPerformance%20Day!5e0!3m2!1ses-419!2smx!4v1731518410293!5m2!1ses-419!2smx"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

    </div>
  );
}

export default Ubicacion;
