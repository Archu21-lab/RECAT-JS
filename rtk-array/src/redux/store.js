import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth_slice.js"
import bookReducer from "../redux/features/book_slice.js"


const store = configureStore({
    reducer:{
        auth:authReducer,
        book:bookReducer,
    },
})

export default store;