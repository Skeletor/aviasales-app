import actions from "../actions";
import initialState from "../initial-state";

function stopCountReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_STOP: {
            const stop = action.payload
            if (state.stops.includes(stop))
                return state

            const stops = [...state.stops, stop]
            return {
                ...state,
                stops
            }
        }

        case actions.REMOVE_STOP: {
            const stop = action.payload
            const index = state.stops.indexOf(stop)
            if (index === -1)
                return state

            const stops = state.stops.filter((item) => item !== stop)
            return {
                ...state,
                stops
            }
        }

        case actions.SET_ALL_STOPS: {
            const allStops = action.payload
            const stops = allStops ? [0, 1, 2, 3] : []
            return {
                ...state,
                stops
            }
        }

        default:
            return state
    }
} 

export default stopCountReducer

export const addStopAction = (payload) => {
    return {
        type: actions.ADD_STOP,
        payload
    }
}

export const removeStopAction = (payload) => {
    return {
        type: actions.REMOVE_STOP,
        payload
    }
}

export const setAllStopsAction = (payload) => {
    return {
        type: actions.SET_ALL_STOPS,
        payload
    }
}