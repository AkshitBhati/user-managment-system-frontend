import { configureStore } from "@reduxjs/toolkit"
import veiwUserSlice from "./veiwUserSlice"
import deleteUserSclice from "./deleteUserSclice"
import editUserSlice from "./editUserSlice"


const store = configureStore({
    reducer:{
        user:veiwUserSlice,
        delete:deleteUserSclice,
        edit:editUserSlice,
        
    }
})



export default store