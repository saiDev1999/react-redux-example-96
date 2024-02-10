



// action creater : function which return action
// action : object which tells what to happen


//this function is to trigger buy ticket case
export function buyTicket(numOfTickets){
    return {
        type:"BUY_TICKET",
        payload:numOfTickets
    }
}


export function blockTicket(){
    return{
        type:"BLOCK_TICKET"
    }
}

export function cancelTicket(){
return{
    type:"CANCEL_TICKET"
}
}

