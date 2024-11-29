import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import AutoPartList from './AutoPartList';

function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState('');

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

  return (
    <div className="catalogo-section">
      <CategorySelector categories={categories} onSelectCategory={setSelectedCategory} />
      {selectedCategory && <AutoPartList selectedCategory={selectedCategory} />}
    </div>
  );
}

export default Catalogo;