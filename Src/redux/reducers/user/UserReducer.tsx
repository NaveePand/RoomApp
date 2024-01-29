import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./UserInterface";

// user reducer store user data and all types of token
const initialState: IUserState = {
  rememberUserData: [],
  userData: null
};

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    setRememberUserData: (state, action) => {


      state.rememberUserData = [...state.rememberUserData, action.payload];
    },
  },
});

export const {

  setRememberUserData,
 
} = UserReducer.actions;

export default UserReducer.reducer;
