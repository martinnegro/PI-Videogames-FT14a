import axios from 'axios';

export const GET_VIDEOGAMES    = 'GET_VIDEOGAMES';
export const SEARCH_API        = 'SEARCH_API';
export const ORDER_ALPH        = 'ORDER_ALPH';      
export const ORDER_BY_RATING   = 'ORDER_BY_RATING'; 
export const FILTER_BY_GENRE   = 'FILTER_BY_GENRE';
export const FILTER_BY_ORIGIN  = 'FILTER_BY_ORIGIN';
export const FILTER_BY_WORD    = 'FILTER_BY_WORD';
export const SET_FETCHING_MSG  = 'SET_INITIAL_STATE';
export const SET_NETWORK       = 'SET_NETWORK'

export function setFetchingMsg() {
    return {
        type: SET_FETCHING_MSG
    }
}

export function getVideogames() {
    return function (dispatch) {        
        dispatch(setFetchingMsg());
        return fetch('http://localhost:3001/videogames',{ method: 'GET' })
                    .then(r => r.json())
                    .then(response => { 
                        dispatch({
                        type: GET_VIDEOGAMES,
                        payload: response
                        });
                    }).catch(err => dispatch({
                        type: SET_NETWORK,
                        payload: err
                    }))
    }
}

export function searchApi(payload) {
    return function (dispatch) {
        dispatch(setFetchingMsg());
        return axios.get(`http://localhost:3001/videogames?name=${payload}`)
        .then(response => dispatch({
            type: SEARCH_API,
            payload: response.data
        })).then(()=>console.log('Se despachó'))
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

export function filterByOrigin(payload) {
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
}