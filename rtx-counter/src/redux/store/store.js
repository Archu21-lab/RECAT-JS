import CounterReducer from "../slices/counterSlice.js"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        counter:CounterReducer,
    }
});
export default store;