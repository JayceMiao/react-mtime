import {ticketAsyncAction} from "actions/ticket/ticketActionCreator"

export const mapStateToProps = (state)=>({
    ticket:state.ticket.ticket
})

export const mapDispatchToProps = (dispatch)=>({
    handleTicketAsyncData(){
        dispatch(ticketAsyncAction())
    }
})