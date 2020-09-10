import React from 'react';

import Carousel from './Components/Carousel/Carousel';

import './App.css';
import CostField from './Components/CostField/CostField';

function App() {
  return (
    <div className="App">
      <CostField />
      <Carousel />
    </div>
  );
}

export default App;
