import { createSlice } from '@reduxjs/toolkit'

const chatSlice =createSlice({
    name:"chat",
    initialState:{
        array:[]
    },
    reducers:{
        addmassage:(state,action)=>{
            state.array.splice(10,1)
            state.array.unshift(action.payload)
        }
    }
})

export const {addmassage}=chatSlice.actions

export default chatSlice.reducer