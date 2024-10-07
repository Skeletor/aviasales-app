import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from "redux-thunk";
import stopCountReducer from "./Reducers/stop-count-reducer";
import filterReducer from "./Reducers/filter-reducer";
import ticketReducer from './Reducers/ticket-reducer';

const reducers = combineReducers({
    stopCountReducer,
    filterReducer,
    ticketReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store