export const SET_INPUT_WORD_FILTER = 'SET_INPUT_WORD_FILTER';
export const SET_SELECT_ORDER      = 'SET_SELECT_ORDER';
export const SET_GENRE_FILTER      = 'SET_GENRE_FILTER';
export const SET_ORIGIN_FILTER     = 'SET_ORIGIN_FILTER';
export const RESTORE_VALUES        = 'RESTORE_VALUES';

export function setInputWordFilter(payload) {
    return {
        type: SET_INPUT_WORD_FILTER,
        payload
    }
}

export function setSelectOrder(payload) {
    return {
        type: SET_SELECT_ORDER,
        payload
    }
}
export function setGenreFilter(payload) {
    return {
        type: SET_GENRE_FILTER,
        payload
    }
} 
export function setOriginFilter(payload) {
    return {
        type: SET_ORIGIN_FILTER,
        payload
    }
}
export function restoreValues() {
    return {
        type: RESTORE_VALUES
    }
}
