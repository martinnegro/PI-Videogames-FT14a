import { 
    GET_VIDEOGAMES,
    ORDER_ALPH,
    ORDER_BY_RATING,
    FILTER_BY_GENRE,
    FILTER_BY_ORIGIN,
    FILTER_BY_WORD
 } from "../actions/videogamesActions";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


const initialState = {
    videogamesCache: [],
    videogames: []
}

export default function videogamesReducer(state = initialState, { type, payload}) {
    let aux;
    switch (type) {
        case GET_VIDEOGAMES: 
            if (state.videogames.length === 0) state.videogames = payload;
            return {
                ...state,
                videogamesCache: payload
            };
        case ORDER_ALPH: 
            aux = state.videogames.slice();
            if (payload === INCREMENT) aux.sort((a, b) => a.name > b.name ? 1 : -1);
            if (payload === DECREMENT) aux.sort((a, b) => a.name > b.name ? -1 : 1);
            return {
                ...state,
                videogames: aux
            }
        case ORDER_BY_RATING:
            aux = state.videogames.slice();
            if (payload === INCREMENT) aux.sort((a, b) => a.rating > b.rating ? 1 : -1);
            if (payload === DECREMENT) aux.sort((a, b) => a.rating > b.rating ? -1 : 1);
            return {
                ...state,
                videogames: aux
            }
        case FILTER_BY_GENRE:
            if (payload === '-1') aux = state.videogamesCache;
            else aux = state.videogamesCache.filter(vg => vg.genres.some(g => g.id === parseInt(payload)));
            return {
                ...state,
                videogames: aux 
            }
        case FILTER_BY_ORIGIN:
            return state;
        case FILTER_BY_WORD:
            
            if (payload.length === 0) aux = state.videogamesCache
            else {aux = state.videogamesCache.filter(vg => vg.name.includes(payload));console.log('entró')}
            return {
                ...state,
                videogame: aux
            }

        default: 
            return state;
    }
}