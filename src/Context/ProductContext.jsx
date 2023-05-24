import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";
// import SingleProduct from "../Pages/SingleProduct";
const AppContext = createContext();

const API = "https://xraksh.github.io/testapi/ecom.json"
// const API = "https://fakestoreapi.com/products/"

const initialState ={
    isLoading: false,
    isError: false,
    products: [],
    Suggested: [],
    Sponsor: [],
    Recommed: [],
    Top: [],
    // for single product initial value
    isSingleLoading: false,
    singleData:{},
}

const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState)

    // Feature products
    const getproducts = async (url) =>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url)
            // console.log(res)
            const products = await res.data
            // console.log(products)
            // dispatch({type:"ALLPRODUCT",payload:products})
            dispatch({type:"SUGGESTED",payload:products})
            dispatch({type:"SPONSOR",payload:products})
            dispatch({type:"RECOMMED",payload:products})
            dispatch({type:"TOP",payload:products})
        } catch (error) {
            dispatch({type:"DATA_ERROR"})
        }
    }

    // All Products
    const allprodutcs = async (url) =>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url)
            // console.log(res)
            const products = await res.data
            // console.log(products)
            dispatch({type:"ALL_PRODUCT",payload:products})
        } catch (error) {
            dispatch({type:"DATA_ERROR"})
        }
    }

    // for single product

    const getSingleProduct = async (url) =>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            console.log(res)
            const singleData = await res.data
            // console.log(singleData)
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleData})
        } catch (error) {
            dispatch({type:"SINGLE_DATA_ERROR"})
        }
    }


    useEffect(()=>{
        getproducts(API)
        allprodutcs(API)
    },[])


    return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>
}

const ProductContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,ProductContext}