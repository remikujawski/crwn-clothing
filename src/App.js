import React from 'react';
import { Route } from 'react-router-dom';
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
      <Route path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;