import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import AutoPartList from './AutoPartList';

function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    "ACCESORIOS JIMNY",
    "ACCESORIOS WRANGLER",
    "BARRAS LATERALES",
    "BARRAS TRANSVERSALES",
    "BARRAS TRASERAS UNIVERSAL",
    "BODY KIT",
    "CAJA DE HERRAMIENTAS",
    "CAMPER",
    "CANASTILLA",
    "CANTONERAS",
    "DEFENSA ESCAPE",
    "DIFUSOR LIP",
    "ESCALERAS",
    "ESTRIBO",
    "EXTENSION DE CAJA",
    "FOCOS LED",
    "OTROS",
    "PARRILLA",
    "PORTABICICLETA",
    "PORTAEQUIPAJE",
    "PROTECTOR COFRE",
    "ROLL BAR Y PASA MANO",
    "SPOILER",
    "TAPA RIGIDA ELECTRICA",
    "TAPA RIGIDA MANUAL",
    "TUMBABURROS"
  ];

  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    const storedPage = localStorage.getItem('selectedPage');
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
    if (storedPage) {
      setCurrentPage(parseInt(storedPage, 10));
    }
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    localStorage.setItem('selectedCategory', category);
    localStorage.setItem('selectedPage', 0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem('selectedPage', page);
  };

  return (
    <div className="catalogo-section">
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      {selectedCategory && (
        <AutoPartList
          selectedCategory={selectedCategory}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default Catalogo;
