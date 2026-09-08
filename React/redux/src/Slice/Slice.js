import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice(
    {
        name:"counts",
        initialState:{countes:0},
        reducers:{
            increment:(state,action)=>{state.countes+=action.payload},
            decrement:(state,action)=>{state.countes-=action.payload},
        }
    }
)

export const {increment,decrement} = countSlice.actions