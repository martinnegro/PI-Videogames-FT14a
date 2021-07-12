import axios from 'axios';
export const GET_GENRES = 'GET_GENRES';
export const SET_CHECKED_GENRES = 'SET_CHECKED_GENRES';
export const CHANGE_CHECKED_GENRES ='CHANGE_CHECKED_GENRES';

export function getGenres() {
    return function (dispatch) {
        console.log('GENRES')
        return axios.get('http://localhost:3001/genres')
                    .then(response => dispatch({
                            type: GET_GENRES,
                            payload: response.data
                    })).catch(err => console.log(err))
    }
}

export function setCheckedGenres() {
    return {
        type: SET_CHECKED_GENRES
    }
}

export function changeCheckedGenres(payload) {
    return {
        type: CHANGE_CHECKED_GENRES,
        payload
    }
}