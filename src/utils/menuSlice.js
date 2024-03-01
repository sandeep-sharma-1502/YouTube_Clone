import { createSlice } from '@reduxjs/toolkit'

const menuSlice =createSlice({
    name:"btn",
    initialState:{
        ismenu:true
    },
    reducers:{
        setMenu:(state)=>{
            (state.ismenu)?state.ismenu=false:state.ismenu=true
        },
        isslid:(state)=>{
            state.ismenu=false
        },
        issl:(state)=>{
            state.ismenu=true
        }
    }
})

export const {setMenu,isslid,issl}=menuSlice.actions

export default menuSlice.reducer