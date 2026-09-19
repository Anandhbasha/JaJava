import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./Slice";

export const store = configureStore({
    reducer:{
        showcount:countSlice.reducer
    }
})