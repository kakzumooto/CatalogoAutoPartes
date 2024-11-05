import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AutoPartList.css';

function AutoPartList({ selectedCategory }) {
  const [autoParts, setAutoParts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory) {
      fetchAutoParts(selectedCategory, currentPage);
    }
  }, [selectedCategory, currentPage]);

  const fetchAutoParts = async (category, page) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/autopartes/categoria`, {
        params: { categoria: category, page, size: 12 },
      });
      setAutoParts(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error al obtener los autopartes", error);
    }
  };

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter(id => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  return (
    <div>
      <div className="auto-parts-grid">
        {autoParts.map((autoPart) => (
          <div key={autoPart.id} className="auto-part-card">
            <img src={`data:image/jpeg;base64,${autoPart.imagen}`} alt={autoPart.nombre_original} />
            <h3>{autoPart.nombre_original}</h3>
            <input
              type="checkbox"
              className="select-checkbox"
              checked={selectedItems.includes(autoPart.id)}
              onChange={() => handleCheckboxChange(autoPart.id)}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button disabled={currentPage === 0} onClick={() => setCurrentPage((prev) => prev - 1)}>
          Anterior
        </button>
        <button disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage((prev) => prev + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default AutoPartList;
