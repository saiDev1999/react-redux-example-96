



const initialState={
    products:[],
    cart:[],
    error:false,
    loading:false
}

export function productsReducer(state=initialState,action){
    switch(action.type){
        case "FETCH_PRODUCTS_SUCCESS":
            //new property to the objects in the array
            const newData=action.payload.map(product=>{return {...product,productInCart:false}})
            return {...state,products:newData}
        case "FETCH_PRODUCT_FAILURE":
            return {...state,error:true}
        case "START_LOADING":
            return {...state,loading:true}
        case "STOP_LOADING":
            return {...state,loading:false}
        case "ADD_TO_CART":
            //matching the id and changing the flag of selected item in the product list
            const newProductData=state.products.map(product=>{
                if(product.id===action.payload.id){
                    return {...product,productInCart:true}
                }else{
                    return product
                }
            })

            return {...state,cart:[...state.cart,action.payload],products:newProductData}
        case "REMOVE_FROM_CART":
            const newCartData=state.cart.filter(product=>product.id!==action.payload.id)
            // const newProductDatas=state.products.map(product=>{return {...product,productInCart:false}})
            const newProductDatas=state.products.map(product=>{
                if(product.id===action.payload.id){
                    return {...product,productInCart:false}

                }else{
                    return product
                }
            })
            return {...state,cart:newCartData,products:newProductDatas}
        default :
        return state
        
    }
}




