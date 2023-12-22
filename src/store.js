import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/userSlice";

const store =configureStore(
    {
        reducer:{
            user:useReducer
    },
}
)
export default store;