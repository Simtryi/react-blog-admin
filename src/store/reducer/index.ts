import {combineReducers} from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import userReducer from "./userSlice";

export default combineReducers({
    app: appReducer,
    user: userReducer
})
