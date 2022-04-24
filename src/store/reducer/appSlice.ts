import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import App from "../../model/App";

const initialState: App = {
    navStatus: false,
    dropdownStatue: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        //  设置导航栏状态
        setNavStatus: (state: App, action: PayloadAction<boolean>) => {
            state.navStatus = action.payload
        },

        //  设置下拉菜单状态
        setDropdownStatus: (state: App, action: PayloadAction<boolean>) => {
            state.dropdownStatue = action.payload
        }
    }
})

export const {setNavStatus, setDropdownStatus} = appSlice.actions
export default appSlice.reducer
