import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES' // Para traer los videojuegos de la base de datos.

export function getVideogames() {
    return function (dispatch) {
        console.log('getVideogames')
        return axios.get('http://localhost:3001/videogames')
                    .then(response => dispatch({
                        type: GET_VIDEOGAMES,
                        payload: response.data
                    }))
    }
}