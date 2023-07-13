import { createSlice } from "@reduxjs/toolkit";

const editUserSlice = createSlice({
  name: "editUser",
  initialState: null,
  reducers: {
    editUser: (state, action) => action.payload,
    clearEditUser: () => null,
  },
});

export const { editUser, clearEditUser } = editUserSlice.actions;
export default editUserSlice.reducer;
