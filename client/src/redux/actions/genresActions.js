import axios from 'axios';
export const GET_GENRES = 'GET_GENRES';
export const SET_ALL_GENRES_FALSE = 'SET_ALL_GENRES_FALSE'; 
export const CHANGE_CHECKED_GENRES ='CHANGE_CHECKED_GENRES';

export function getGenres() {
    return function (dispatch) {
        return axios.get('/genres')
                    .then(response => dispatch({
                            type: GET_GENRES,
                            payload: response.data
                    })).catch(err => console.log(err))
    }
}
export function setAllGenresFalse() {
    return {
        type: SET_ALL_GENRES_FALSE
    }
}


export function changeCheckedGenres(payload) {
    return {
        type: CHANGE_CHECKED_GENRES,
        payload
    }
}