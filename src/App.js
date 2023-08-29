import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Dragons from './components/Dragons';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route exact path="/dragons" element={<Dragons />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
