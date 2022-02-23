import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Password from "antd/lib/input/Password";
import { act } from "react-dom/test-utils";

const initialState = {
    status: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
});


// export const { login } = authSlice.actions;

export default authSlice.reducer;