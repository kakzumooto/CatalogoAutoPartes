import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AutoPartList.css';

function AutoPartList({ selectedCategory, currentPage, onPageChange }) {
  const [autoParts, setAutoParts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [hoveredCode, setHoveredCode] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      fetchAutoParts(selectedCategory, currentPage);
    }
  }, [selectedCategory, currentPage]);

  const fetchAutoParts = async (category, page) => {
    try {
      const response = await axios.get(`http://209.38.151.153/api/autopartes/categoria`, {
        params: { categoria: category, page, size: 12 },
      });
      setAutoParts(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error al obtener los autopartes", error);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedCode(text);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => console.error("No se pudo copiar el código."));
  };

  return (
    <div>
      <div className="auto-parts-grid">
        {autoParts.map((autoPart) => (
          <div key={autoPart.id} className="auto-part-card">
            <img src={`data:image/jpeg;base64,${autoPart.imagen}`} alt={autoPart.nombre_original} />
            <h6>{autoPart.nombre_original}</h6>
            <h4
              onMouseEnter={() => setHoveredCode(autoPart.codigo)}
              onMouseLeave={() => setHoveredCode(null)}
              onClick={() => copyToClipboard(autoPart.codigo)}
              style={{ cursor: 'pointer' }}
            >
              CÓDIGO: {autoPart.codigo}
              {hoveredCode === autoPart.codigo && (
                <span className="tooltip">Click para copiar código</span>
              )}
              {copiedCode === autoPart.codigo && (
                <span className="copied-message">¡Copiado!</span>
              )}
            </h4>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button disabled={currentPage === 0} onClick={() => onPageChange(currentPage - 1)}>
          Anterior
        </button>
        <span className="page-indicator">
          Página {currentPage + 1} de {totalPages}
        </span>
        <button disabled={currentPage === totalPages - 1} onClick={() => onPageChange(currentPage + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default AutoPartList;
