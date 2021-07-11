import { 
    GET_VIDEOGAMES, 
    ORDER_ALPH,
    ORDER_BY_RATING,
    FILTER_BY_GENRE,
    FILTER_BY_ORIGIN
 } from "./actions";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


const initialState = {
    videogamesCache: [],
    videogames: [],
    videogame: {},
}

export default function reducer(state = initialState, action) {
    let aux;
    switch (action.type) {
        case GET_VIDEOGAMES: 
            if (state.videogames.length === 0) state.videogames = action.payload;
            return {
                ...state,
                videogamesCache: action.payload
            };
        case ORDER_ALPH: 
            aux = state.videogames.slice();
            if (action.payload === INCREMENT) aux.sort((a, b) => a.name > b.name ? 1 : -1);
            if (action.payload === DECREMENT) aux.sort((a, b) => a.name > b.name ? -1 : 1);
            return {
                ...state,
                videogames: aux
            }
        case ORDER_BY_RATING:
            aux = state.videogames.slice();
            if (action.payload === INCREMENT) aux.sort((a, b) => a.rating > b.rating ? 1 : -1);
            if (action.payload === DECREMENT) aux.sort((a, b) => a.rating > b.rating ? -1 : 1);
            return {
                ...state,
                videogames: aux
            }
        case FILTER_BY_GENRE:
            return {
                ...state,
                videogames: state.videogamesCache.filter(vg => vg.genres.some(g => g.name === action.payload))
            }
        case FILTER_BY_ORIGIN:
            return state;
        default: 
            return state;
    }
}