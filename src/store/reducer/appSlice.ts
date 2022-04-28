import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Route} from "antd/lib/breadcrumb/Breadcrumb";

/**
 * 应用状态
 */
interface AppState {
    navStatus: boolean      //  导航栏状态 true: 打开, false: 关闭
    routes: Route[]         //  面包屑路由
}

const initialState: AppState = {
    navStatus: false,
    routes: [
        {
            path: 'index',
            breadcrumbName: 'container'
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
        //  初始化应用
        initApp: (state: AppState) => {
            state.navStatus = initialState.navStatus
            state.routes = initialState.routes
        },

        //  设置导航栏状态
        setNavStatus: (state: AppState, action: PayloadAction<boolean>) => {
            state.navStatus = action.payload
        },

        //  设置面包屑路由
        setRoutes: (state: AppState, action: PayloadAction<Route[]>) => {
            state.routes = action.payload
        }
    }
})

export const {initApp, setNavStatus, setRoutes} = appSlice.actions
export default appSlice.reducer
