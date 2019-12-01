import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import ticket from "./reducers/ticket"
const reducers = combineReducers({
    ticket
})

const store = createStore(reducers,applyMiddleware(reduxThunk));

export  default store;