import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from '../redux/actions/videogamesActions';
import './App.css';

import NavBar from '../components/NavBar'
import Home from '../components/Home';
import Videogames from '../components/Videogames';
import VideogameDetail from '../components/VideogameDetail';
import PostVideogame from '../components/PostVideogame';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogames());
    
  },[])


  return (
    <div className='App'>
    <Route path='/' render={NavBar}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/videogames'>
      <Videogames></Videogames>
    </Route>
    <Route exact path='/videogame/:id' render={({match}) => <VideogameDetail idDb={match.params.id}/>}/> 
    <Route exact path='/postvideogame' component={PostVideogame}/>
    </div>
  );
}

export default App;
