import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authentication",
    initialState:{
        status: "",
        errorMessage: "",
        userAuthenticated:{}
    },
    reducers:{
        register: (state,action) =>{
            state.status = action.payload.status;
            state.errorMessage = action.payload.errorMessage;
            state.userAuthenticated =  action.payload.userAuthenticated
        },

        login: (state,action) =>{
            state.status = action.payload.status;
            state.errorMessage = action.payload.errorMessage;
            state.userAuthenticated = action.payload.userAuthenticated
        },

        logout: (state, action) =>{
            state.status = action.payload.status;
            state.userAuthenticated = action.payload.userAuthenticated
        },
        credentialsCheck: (state,action) =>{
            state.status = "checking user credentials";
            state.errorMessage = action.payload;
            state.userAuthenticated = action.payload;
        }


    }
})

export const {register,login,logout,credentialsCheck} = authSlice.actions;