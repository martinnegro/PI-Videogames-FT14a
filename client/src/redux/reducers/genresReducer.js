
import { GET_GENRES, SET_CHECKED_GENRES, CHANGE_CHECKED_GENRES } from '../actions/genresActions';

const initialState = {
    genres: [],
    checkedGenres: [],
    selectedGenres: []
}

export default function genresReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_GENRES:
            return {
                ...state,
                genres: payload
            }
        case SET_CHECKED_GENRES:
            const newCheck = new Array(state.genres.length).fill(false)
            return {
                ...state,
                checkedGenres: newCheck
            }
        case CHANGE_CHECKED_GENRES:
            const newState = state.checkedGenres.map((item, index)=> index === payload ? !item : item);
            const selectedGenres = state.genres.filter((g, i) => newState[i]).map(g => g.id)
            return {
                ...state,
                checkedGenres: newState,
                selectedGenres
            }
        default:
            return state
    }
}