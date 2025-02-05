import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./itemsSlice";


const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
    },
})

export default store;