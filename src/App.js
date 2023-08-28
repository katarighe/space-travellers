import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Dragons from './components/Dragons';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/Missions" element={<Missions />} />
        <Route exact path="/Dragons" element={<Dragons />} />
      </Routes>
    </>
  );
}

export default App;
