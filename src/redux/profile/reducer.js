


const initialState={
    name:null,
    salary:null
}

export function profileReducer (state=initialState,action){
    switch(action.type){
        case "FETCH_DETAILS_SUCCESS":
            return {...state,name:action.payload.name,salary:action.payload.salary}
        default :
        return state
    }

}