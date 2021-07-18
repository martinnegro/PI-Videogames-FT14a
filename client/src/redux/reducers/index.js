import { combineReducers } from 'redux';
import genresReducer from './genresReducer';
import videogamesReducer from './videogamesReducer';
import inputsReducer from './inputsReducer';

export default combineReducers({
    genresReducer,
    videogamesReducer,
    inputsReducer
  })
  