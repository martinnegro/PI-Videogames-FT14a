import React, { useEffect, useRef } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../redux/actions/videogamesActions';
import { getGenres } from '../redux/actions/genresActions';

import './App.scss'

import Landing from '../components/Landing';
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
        <Route exact path="/">
          <Landing></Landing>
        </Route>
        <Route path='/site'>
          <NavBar/>
          <div className='container'>
            <Route exact path='/site/videogames'>
              <Videogames />
            </Route>
            <Route exact path='/site/videogame/:id' render={({match}) => <VideogameDetail idDb={match.params.id}/>}/> 
            <Route exact path='/site/postvideogame' component={PostVideogame}/>
          </div>
        </Route>
      </div>
  );
}

export default App;
