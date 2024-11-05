import React from 'react';

function CategorySelector({ categories, onSelectCategory }) {

  return (
    <select className="category-select" onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">SELECCIONA UNA CATEGORÍA</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
  );
}

export default CategorySelector;