import { combineReducers } from 'redux';
import genresReducer from './genresReducer';
import platformsReducer from './platformsReducer';
import videogamesReducer from './videogamesReducer';
import inputsReducer from './inputsReducer';

export default combineReducers({
    platformsReducer,
    genresReducer,
    videogamesReducer,
    inputsReducer
  })
  