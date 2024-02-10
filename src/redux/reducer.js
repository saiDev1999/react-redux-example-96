

//Initial State 
const initialState ={
  totalTickets : 100,
  filledTickets :90,
  blockTickets:3,
  unfilledTickets:7
}

export function ticketReducer (state=initialState,action){
   

switch(action.type){
    case "BUY_TICKET":
        return {...state,filledTickets:state.filledTickets+action.payload,unfilledTickets:state.unfilledTickets-action.payload}
    case "BLOCK_TICKET":
        return {...state,blockTickets:state.blockTickets+1,unfilledTickets:state.unfilledTickets-1}
    case "CANCEL_TICKET":
        return {...state,unfilledTickets:state.unfilledTickets+1,filledTickets:state.filledTickets-1}

    default : 
    return state
    }


}