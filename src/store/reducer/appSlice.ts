import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import App from "../../model/App";

const initialState: App = {
    collapsed: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        //  设置菜单收起状态
        setCollapsed: (state: App, action: PayloadAction<boolean>) => {
            state.collapsed = action.payload
        }
    }
})

export const {setCollapsed} = appSlice.actions
export default appSlice.reducer
