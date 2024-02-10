import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, fetchDataAction, removeFromCart } from "../redux/products/action"

const HomeScreen =()=>{
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.products.products)
    const isLoading=useSelector(state=>state.products.loading)
    const cart=useSelector(state=>state.products.cart)
   
    useEffect(()=>{
        fetchData()
    },[])

    function fetchData(){
        dispatch(fetchDataAction())
    }

  function handleCart(item){
    if(item.productInCart){
        alert("already in cart")
    }else{
        dispatch(addToCart(item))
    }
  }

  function handleRemove(item){
    dispatch(removeFromCart(item))
    
  }
    return(
        <>
        <>{cart.length}</>
       {
        isLoading?<h1>Loading</h1>:<>
        

        {productList.map(ele=><>
        <h1>{ele.title}</h1>
        <button onClick={()=>handleCart(ele)} >{ele.productInCart?"Added to cart":"Add To Cart"}</button>
        </>
        )}
        </>
       }
       <h2>---------------Products in cart------------------</h2>
       {
        cart.map(product=><>
        <h3>{product.title}</h3>
        <button onClick={()=>handleRemove(product)} >Remove from cart</button>
        </>)
       }
        </>
    )
}
export default HomeScreen



// api --> 1. success 2. failure 3. loading until api success or failure 


// redux-thunk --> redux-thunk allows you to return multiple actions instead of single action , it give extra capabilities to redux 
// it is a third party library 
// redux-thunk 
// thereby we can track the changes easily 