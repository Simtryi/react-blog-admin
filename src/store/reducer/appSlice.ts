import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import App from "../../model/App";

const initialState: App = {
    navStatus: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        //  设置导航栏状态
        setNavStatus: (state: App, action: PayloadAction<boolean>) => {
            state.navStatus = action.payload
        }
    }
})

export const {setNavStatus} = appSlice.actions
export default appSlice.reducer
