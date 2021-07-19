import { GET_PLATFORMS, CHANGE_CHECKED_PLATFORMS, SET_ALL_PLATFORMS_FALSE} from '../actions/platformsActions';

const initialState = {
    platforms: [],
    selectedPlatforms: []
}

export default function platformsReducer(state = initialState, { type, payload }) {
    let aux;
    switch (type) {
        case GET_PLATFORMS:
            payload.forEach(g => g.check = false);
            return {
                ...state,
                platforms: payload
            }
        case SET_ALL_PLATFORMS_FALSE:
            aux = state.platforms.slice();
            aux.forEach(g => g.check = false);
            return {
                platforms: aux,
                selectedPlatforms: []
            }
            
        case CHANGE_CHECKED_PLATFORMS:
            aux = state.platforms.slice();
            aux.forEach(( g ) => parseInt(g.id) === parseInt(payload) ? g.check = !g.check : g.check = g.check );
            return {
                platforms: aux,
                selectedPlatforms: aux.filter((g) => g.check)
            }
        default:
            return state
    }
}