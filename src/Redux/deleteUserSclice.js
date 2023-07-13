import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser(state, action) {
      axios.delete(`https://dark-teal-goldfish-wear.cyclic.app/users/${action.payload}`)
    },
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
