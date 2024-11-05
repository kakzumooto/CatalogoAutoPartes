import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import AutoPartList from './AutoPartList';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [
    "BARRAS TRANSVERSALES",
    "CAJA DE HERRAMIENTAS",
    "CANASTILLAS",
    "EXTENSION DE CAJA",
    "FOCOS LED",
    "OTROS",
    "OTROS SOPORTES",
    "PORTA BICICLETA",
    "PORTA EQUIPAJE",
    "TAPA RIGIDA"
  ];

  return (
    <div className="App">
      <CategorySelector categories={categories} onSelectCategory={setSelectedCategory} />
      {selectedCategory && <AutoPartList selectedCategory={selectedCategory} />}
    </div>
  );
}

export default App;
