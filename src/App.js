import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Dragons from './components/Dragons';
import Profile from './components/Profile';
import { getDragons } from './redux/dragons/dragonsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

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
