import { createSlice, configureStore } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:"auth",
    initialState:
    {
        isAuthantication:false,
    },
    reducers:{
        login(state){
            state.isAuthantication=true
        },
        logout(state)
        {
            state.isAuthantication=false
        },
       

    }
})

export const authAction=authSlice.actions
export const store=configureStore({
    reducer:authSlice.reducer,
})