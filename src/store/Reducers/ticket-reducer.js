import actions from "../actions";
import initialState from "../initial-state";

import ServerDataHandler from "../../service/server-data-handler";

function ticketReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_TICKETS: {
            const newSetOfTickets = [...state.tickets, ...action.payload]
            return {
                ...state,
                tickets: newSetOfTickets
            }
        }

        case actions.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        default:
            return state
    }
}

export default ticketReducer

export const setIsLoading = (isLoading) => {
    return {
        type: actions.SET_IS_LOADING,
        payload: isLoading
    }
}

export const setTickets = (tickets) => {
    return {
        type: actions.SET_TICKETS,
        payload: tickets
    }
}

export const requestTickets = async (dispatch) => {
    dispatch(setIsLoading(true))

    while (true) {
        const response = await ServerDataHandler.getTickets()
        const json = await response.json()

        const stop = json.stop
        if (stop)
            break

        dispatch(setIsLoading(false))
        dispatch(setTickets(json.tickets))
    }
}