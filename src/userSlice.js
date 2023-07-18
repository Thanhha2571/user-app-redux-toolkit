import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./services/api";

const initialState = {
  user: {},
  users: []
};

//get all users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await userApi.getUsers();
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//create a new user
export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData, thunkAPI) => {
    try {
      const response = await userApi.createUser(userData);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.users.rows;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload.user);
      });
  }
});

export default userSlice.reducer;
