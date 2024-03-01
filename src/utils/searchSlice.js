import { createSlice } from '@reduxjs/toolkit'

const searchSlice =createSlice({
    name:"search",
    initialState:{},
    reducers:{
        chachResult:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})

export const {chachResult}=searchSlice.actions

export default searchSlice.reducer