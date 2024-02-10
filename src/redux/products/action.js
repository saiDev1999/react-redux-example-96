import axios from "axios"
import { ReduxStore } from "../store"






const dispatch=ReduxStore.dispatch 


//ACTION CREATOR USING THUNK
export function fetchDataAction (){
    dispatch({
        type:"START_LOADING"
    })

    return ()=>{
        try{
        //this function we can trigger multiple actiosn
        //here we can make http calls
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            dispatch({
                type:"FETCH_PRODUCTS_SUCCESS",
                payload:response.data
            })
            dispatch({
                type:"STOP_LOADING"
            })
        })
        .catch(response=>console.log(response))
        }catch(err){

        } finally{

        }

    }
}


//item to cart function 
export function addToCart(product){
    return{
        type:"ADD_TO_CART",
        payload:product
    }
     
}

export function removeFromCart(product){
    return{
        type:"REMOVE_FROM_CART",
        payload:product
    }
}