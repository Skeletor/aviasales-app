import actions from "../actions";
import initialState from "../initial-state";

function filterReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_SORT: {
            return {
                ...state,
                sort: action.payload
            }
        }

        default:
            return state
    }
}

export default filterReducer

export const setSortAction = (payload) => {
    return {
        type: actions.SET_SORT,
        payload
    }
}
