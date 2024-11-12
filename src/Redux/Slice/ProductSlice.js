import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    productsData : []
}

export const getAllProducts = createAsyncThunk('/products/getAll',async ()=>{
    try{ 
        const products = axiosInstance.get('/product')
        toast.promise(products,{
            success:"Products Loaded Successfully",
            loading:"Loading all the products",
            error:"Something went wrong, Cannot load product"
        })
        const apiResponse = await products
        return apiResponse

    }catch(error){
        console.log(error)
        toast.error("Something went wrong")
    }
})

export const getProductDetails = createAsyncThunk("/product/getDetails",async(id)=>{
    try{
        const product = axiosInstance.get(`/product/${id}`)
        toast.promise(product,{
            success:'Product Details fetched successfully',
            loading:"Loading product details",
            error:"Unable to load product details"
        })
        const apiResponse = await product
        return apiResponse
    }catch(error){
        console.log(error)
    }
})

const ProductSlice = createSlice({
    name : "product",
    initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.productsData = action?.payload?.data?.data
        })
    }
})

export default ProductSlice.reducer