import axios from 'axios';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const CHANGE_CHECKED_PLATFORMS ='CHANGE_CHECKED_PLATFORMS';
export const SET_ALL_PLATFORMS_FALSE = 'SET_ALL_PLATFORMS_FALSE'; 

export function getPlatforms() {
    return function (dispatch) {
        return axios.get('/platforms')
                    .then(response => dispatch({
                            type: GET_PLATFORMS,
                            payload: response.data
                    })).catch(err => console.log(err))
    }
}

export function setAllPlatformsFalse() {
    return {
        type: SET_ALL_PLATFORMS_FALSE
    }
}


export function changeCheckedPlatforms(payload) {
    return {
        type: CHANGE_CHECKED_PLATFORMS,
        payload
    }
}