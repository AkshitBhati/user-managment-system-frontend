import { createSlice } from "@reduxjs/toolkit";

const veiwUserSlice = createSlice({
    initialState:[],
    name:"users",
    reducers:{
        addUser(state, action){
            state.push(action.payload)
            localStorage.setItem('user Info', JSON.stringify(action.payload))
        },
        removeUser(){
            return []
        }
    }
})

export const { addUser, removeUser } = veiwUserSlice.actions
export default veiwUserSlice.reducer