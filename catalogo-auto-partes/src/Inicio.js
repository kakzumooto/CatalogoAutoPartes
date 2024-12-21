import React from 'react';
import './Inicio.css';

function Inicio() {
  return (
    <div className="inicio-section">
      <div className="inicio-content">
        <div className="inicio-text">
          <h1>Bienvenido a Performance Day</h1>
          <p>
            Tu catálogo confiable de autopartes de alta calidad. Explora nuestras categorías y encuentra lo que necesitas.
          </p>
        </div>
        <div className="inicio-video">
          <iframe
            src="https://www.youtube.com/embed/9oCVs9VdACE"
            title="Performance Day Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
