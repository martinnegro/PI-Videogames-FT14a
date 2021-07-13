import axios from 'axios';

export const GET_VIDEOGAMES   = 'GET_VIDEOGAMES';
export const ORDER_ALPH       = 'ORDER_ALPH';      
export const ORDER_BY_RATING  = 'ORDER_BY_RATING'; 
export const FILTER_BY_GENRE  = 'FILTER_BY_GENRE';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const FILTER_BY_WORD   = 'FILTER_BY_WORD';

export function getVideogames() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/videogames')
                    .then(response => dispatch({
                        type: GET_VIDEOGAMES,
                        payload: response.data
                    }))
    }
}

export function orderAlph(payload){
    return {
            type: ORDER_ALPH,
            payload
        }
}

export function orderByRating(payload) {
    return {
        type: ORDER_BY_RATING,
        payload
    }
}

export function filterByGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}

export function filterByWord(payload) {
    return {
        type: FILTER_BY_WORD,
        payload
    }
}