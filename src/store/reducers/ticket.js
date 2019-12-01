import {handleActions} from "redux-actions"
import {ticketAsyncType} from 'actions/ticket/ticketActionTypes'
const defaultState = {
    ticket:[]
}


export default handleActions({
    [ticketAsyncType]:(state,action)=>{
        // console.log(action.data.data.cinemaList,111)
        let ticketState = JSON.parse(JSON.stringify(state))
        ticketState.ticket = action.data.data.cinemaList
        return ticketState;
    }
},defaultState)