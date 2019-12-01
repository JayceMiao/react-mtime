import {ticketAsyncType} from './ticketActionTypes'
import {ticketApi} from "api/ticket"


export const ticketAsyncAction = (cityId)=>{
    let ticketAction = (data)=>({
        type:ticketAsyncType,
        data
    })

    return async (dispatch)=>{
        let data = await ticketApi(290);
        dispatch(ticketAction(data))
    }
}
