
import { GET_GENRES, CHANGE_CHECKED_GENRES, SET_ALL_GENRES_FALSE } from '../actions/genresActions';
import { SET_ALL_PLATFORMS_FALSE } from '../actions/platformsActions';

const initialState = {
    genres: [],
    selectedGenres: []
}

export default function genresReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_GENRES:
            payload.forEach(g => g.check = false);
            return {
                ...state,
                genres: payload
            }
        case SET_ALL_GENRES_FALSE:
            aux = state.genres.slice();
            aux.forEach(p => p.check = false);
            return {
                genres: aux,
                selectedGenres: []
            }
        case CHANGE_CHECKED_GENRES:
            const aux = state.genres.slice();
            aux.forEach(( g ) => parseInt(g.id) === parseInt(payload) ? g.check = !g.check : g.check = g.check );
            
            return {
                genres: aux,
                selectedGenres: aux.filter((g) => g.check)
            }
        default:
            return state
    }
}