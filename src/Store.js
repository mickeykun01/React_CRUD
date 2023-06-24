import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slice/UserReducer";

export default configureStore({
    reducer : {
        users : UserReducer
    }
})