import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import searchSlice from './searchSlice'
import chatSlice from './chatSlice'


const store =configureStore({
    reducer:{
        btn:menuSlice,
        search:searchSlice,
        chat:chatSlice
    }
})

export default store