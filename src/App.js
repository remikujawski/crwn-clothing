import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div className="">
    <h1>HATS PAGE UPDATE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hats' element={<HatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;