import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../redux/actions/videogamesActions';
import { getGenres } from '../redux/actions/genresActions';

import './App.scss'

import NavBar from '../components/NavBar'
import Home from '../components/Home';
import Videogames from '../components/Videogames';
import VideogameDetail from '../components/VideogameDetail';
import PostVideogame from '../components/PostVideogame';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres())
  },[dispatch])


  return (
      <div className='App'>
        <Route path='/' render={NavBar}/>
          <div className='container'>
            <Route exact path='/' component={Home}/>
            <Route exact path='/videogames'>
              <Videogames></Videogames>
            </Route>
            <Route exact path='/videogame/:id' render={({match}) => <VideogameDetail idDb={match.params.id}/>}/> 
            <Route exact path='/postvideogame' component={PostVideogame}/>
          </div>
      </div>
  );
}

export default App;
