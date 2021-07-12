import { combineReducers } from 'redux';
import genresReducer from './genresReducer';
import videogamesReducer from './videogamesReducer';

export default combineReducers({
    genresReducer,
    videogamesReducer
  })
  