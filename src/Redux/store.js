import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './Slice/AuthSlice'
import ProductSliceReducer from './Slice/ProductSlice'
import CartSliceReducer from './Slice/CartSlice'
import OrderSliceReducer from './Slice/OrderSlice'

export const store = configureStore({
    reducer:{
        auth : AuthSliceReducer,
        product : ProductSliceReducer,
        cart : CartSliceReducer,
        order : OrderSliceReducer
    },
    devTools:true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    
    //for devTools on chrome to visualize state there 
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})