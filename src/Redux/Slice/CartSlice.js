import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    cartsData : ' '
}

export const addProductToCart = createAsyncThunk("/carts/addProducts",async (productId)=>{
    try{
        const response = axiosInstance.post(`/cart/add/${productId}`)
        toast.promise(response,{
            success:'Product added to the cart',
            loading:'Adding product to cart',
            error:'Cant add product to cart..try again later',
        })
        const apiResponse = await response
        return apiResponse
    }catch(error){
        toast.error("Something went wrong")
        console.log(error)
    }
})

export const removeProductFromCart = createAsyncThunk("/cart/removeProduct",async (productId)=>{
    try{
        const response = axiosInstance.post(`/cart/remove/${productId}`)
        toast.promise(response,{
            success:"Product deleted from the cart",
            loading:'Deleting product from the cart', 
            error:'Cant delete product from the cart..try again'
        })
        const apiResponse = await response
        return apiResponse
    }catch(error){
        toast.error("Something went wrong")
        console.log(error)
    }
})

export const getProductsOfCart = createAsyncThunk("/cart/getProducts",async()=>{
    try{
        const response = axiosInstance.get('/cart')
        toast.promise(response,{
            success:'Products fetched successfully',
            error:'Unable to fetch products',
            loading:'Fetching products from the cart'
        })
        const apiResponse = await response
        return apiResponse
    }catch(error){
        console.log(error)
        if(error?.response?.status === 401){
            toast.error("Please login in to view cart")
            return {
                isUnauthorized : true
            }
        }
        toast.error('Something went wrong')
    }
})

const cartSlice = createSlice({ 
    name : "cart",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProductsOfCart.fulfilled,(state,action)=>{
            state.cartsData = action?.payload?.data?.data
        })
    }
})

export default cartSlice.reducer