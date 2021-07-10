import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavBar from '../components/NavBar'
import Home from '../components/Home';
import Videogames from '../components/Videogames';

function App() {
  return (
    <div>
    <Route path='/' render={NavBar}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/videogames'>
      <Videogames></Videogames>
    </Route>
    </div>
  );
}

export default App;
