import { 
    GET_VIDEOGAMES,
    SET_CHECKED_VGS,
    SET_SELECTED_VGS,
    ORDER_ALPH,
    ORDER_BY_RATING,
    FILTER_BY_GENRE,
    FILTER_BY_ORIGIN,
    FILTER_BY_WORD
 } from "../actions/videogamesActions";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


const initialState = {
    videogames: []
}

export default function videogamesReducer(state = initialState, { type, payload}) {
    let aux;
    switch (type) {
        case GET_VIDEOGAMES: 
            payload.forEach(vg => {
                    vg.checkGenre = true;
                    vg.checkWord  = true;
                });
            return {
                videogames: payload
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
            aux = state.videogames.slice()
            if (payload === '-1') aux.forEach(vg => vg.checkGenre = true);
            else aux.forEach(vg => vg.genres.some(g => g.id == payload) ? vg.checkGenre = true : vg.checkGenre = false);
            return {
                ...state,
                videogames: aux 
            }
        // case FILTER_BY_ORIGIN:
        //     return state;
        case FILTER_BY_WORD:
            aux = state.videogames.slice()
            if (payload.length === 0) aux.forEach(vg => vg.checkWord = true)
            else aux.forEach(vg => vg.name.toLowerCase().includes(payload.toLowerCase()) ? vg.checkWord = true : vg.checkWord = false )
            return {
                ...state,
                videogames: aux
            }

        default: 
            return state;
    }
}