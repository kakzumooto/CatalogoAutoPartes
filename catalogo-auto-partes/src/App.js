import React, { useState, useEffect } from 'react';
import Inicio from './Inicio';
import Catalogo from './Catalogo';
import Presupuesto from './Presupuesto';
import Contactanos from './Contactanos';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    const handleHashChange = () => {
      const section = window.location.hash.slice(1) || 'inicio';
      setCurrentSection(section);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return <Inicio />;
      case 'catalogo':
        return <Catalogo />;
      case 'presupuesto':
        return <Presupuesto />;
      case 'contactanos':
        return <Contactanos />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul className="header-menu">
            <li><a href="#inicio" onClick={() => setCurrentSection('inicio')}>Inicio</a></li>
            <li><a href="#catalogo" onClick={() => setCurrentSection('catalogo')}>Catálogo</a></li>
            <li><a href="#presupuesto" onClick={() => setCurrentSection('presupuesto')}>Presupuesto</a></li>
            <li><a href="#contactanos" onClick={() => setCurrentSection('contactanos')}>Contáctanos</a></li>
          </ul>
        </nav>
      </header>
      {renderSection()}
    </div>
  );
}

export default App;
