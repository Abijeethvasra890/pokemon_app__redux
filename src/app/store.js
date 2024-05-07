import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme/themeSlice'
import authReducer from '../features/auth/authSlice'
import fetchDataReducer from "../features/fetchData/fetchDataSlice"

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        auth: authReducer,
        fetchData: fetchDataReducer
    }
})