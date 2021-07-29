import { 
    GET_VIDEOGAMES,
    SEARCH_API,
    ORDER_ALPH,
    ORDER_BY_RATING,
    FILTER_BY_GENRE,
    FILTER_BY_ORIGIN,
    FILTER_BY_WORD,
    SET_FETCHING_MSG,
    SET_NETWORK
 } from "../actions/videogamesActions";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


const initialState = {
    videogames: [],
    isFetching: true,
    network: {}
}

export default function videogamesReducer(state = initialState, { type, payload}) {
    let aux;
    switch (type) {
        case SET_FETCHING_MSG: 
            return {
                ...state,
                isFetching: true
            }
        case GET_VIDEOGAMES: 
            payload.forEach(vg => {
                    vg.checkGenre  = true;
                    vg.checkWord   = true;
                    vg.checkOrigin = true;
                });
            return {
                videogames: payload,
                network: {}
            };
        case SEARCH_API:
            payload.forEach(vg => {
                vg.checkGenre  = true;
                vg.checkWord   = true;
                vg.checkOrigin = true;
            });
            return {
                videogames: payload,
                network: {}
            };
        case SET_NETWORK:
            return {
                ...state,
                isFetching: false,
                network: payload
            }
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
                videogames: aux,
                
            }
        case FILTER_BY_GENRE:
            aux = state.videogames.slice()
            if (payload === -1) aux.forEach(vg => vg.checkGenre = true);
            else aux.forEach(vg => vg.genres.some(g => parseInt(g.id) === parseInt(payload)) ? vg.checkGenre = true : vg.checkGenre = false);
            return {
                ...state,
                videogames: aux,
                
            }
        case FILTER_BY_WORD:
            aux = state.videogames.slice()
            if (payload.length === 0) aux.forEach(vg => vg.checkWord = true)
            else aux.forEach(vg => vg.name.toLowerCase().includes(payload.toLowerCase()) ? vg.checkWord = true : vg.checkWord = false )
            return {
                ...state,
                videogames: aux,
                
            }    
        case FILTER_BY_ORIGIN:
            aux = state.videogames.slice()
            if (parseInt(payload) === -1  ) aux.forEach(vg => vg.checkOrigin = true);
            if (payload === 'API' ) aux.forEach(vg =>  vg.idRawg ? vg.checkOrigin = true : vg.checkOrigin = false);
            if (payload === 'USER') aux.forEach(vg => !vg.idRawg ? vg.checkOrigin = true : vg.checkOrigin = false);
            return {
                ...state,
                videogames: aux,
                
            }
        default: 
            return state;
    }
}

