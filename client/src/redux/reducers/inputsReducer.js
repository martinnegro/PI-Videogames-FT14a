import { SET_INPUT_WORD_FILTER,
         SET_SELECT_ORDER,
         SET_GENRE_FILTER,
         SET_ORIGIN_FILTER,
         RESTORE_VALUES,
} from "../actions/inputsActions";

const initialState = {
    inputWordFilter: '',
    selectOrder: 0,
    genreFilter: -1,
    originFilter: -1,
}

export default function inputsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_INPUT_WORD_FILTER: 
            return {
                ...state,
                inputWordFilter: payload
            }
        case SET_SELECT_ORDER:
            return {
                ...state,
                selectOrder: payload
            }
        case SET_GENRE_FILTER:
            return {
                ...state,
                genreFilter: payload
            }
        case SET_ORIGIN_FILTER:
            return {
                ...state,
                originFilter: payload
            }
        case RESTORE_VALUES:
            return initialState;
        default: 
            return state;
    }
}