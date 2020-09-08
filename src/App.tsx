import React from 'react';

import Carrossel from './Components/Carrossel/Carrossel';

import './App.css';
import CostField from './Components/CostField/CostField';

function App() {
  return (
    <div className="App">
      <CostField />
      <Carrossel />
    </div>
  );
}

export default App;
