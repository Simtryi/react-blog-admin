import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import App from "../../model/App";
import {Route} from "antd/lib/breadcrumb/Breadcrumb";

const initialState: App = {
    navStatus: false,
    dropdownStatue: false,
    routes: [
        {
            path: 'index',
            breadcrumbName: 'home'
        },
        {
            path: 'first',
            breadcrumbName: 'first'
        },
        {
            path: 'second',
            breadcrumbName: 'second',
        }
    ]
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
        },

        //  设置面包屑路由
        setRoutes: (state: App, action: PayloadAction<Route[]>) => {
            state.routes = action.payload
        }
    }
})

export const {setNavStatus, setDropdownStatus, setRoutes} = appSlice.actions
export default appSlice.reducer
