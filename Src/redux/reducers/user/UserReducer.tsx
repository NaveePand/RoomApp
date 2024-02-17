import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  isLoading: boolean;
  credentials: {
    email: string | null;
    password: string | null;
  };
}

const initialState: IUserState = {
  isLoading: false,
  credentials: {
    email: null,
    password: null,
  },
};

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
    logout: (state) => {
      state.credentials = { email: null, password: null };
      state.isLoading = false;
    },
  },
});

export const { setLoadingState, setCredentials, logout } = UserReducer.actions;

export default UserReducer.reducer;
