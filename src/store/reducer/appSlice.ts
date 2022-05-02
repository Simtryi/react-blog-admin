import {createSlice, PayloadAction} from "@reduxjs/toolkit";

/**
 * 应用状态
 */
interface AppState {
    navStatus: boolean      //  导航栏状态 true: 打开, false: 关闭
    selectedKeys: string[]  //  当前选中的菜单项 key 数组
    openKeys: string[]      //  当前展开的 SubMenu 菜单项 key 数组
}

const initialState: AppState = {
    navStatus: false,
    selectedKeys: [],
    openKeys: []
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        //  初始化应用
        initApp: (state: AppState) => {
            state.navStatus = initialState.navStatus
            state.selectedKeys = []
            state.openKeys = []
        },

        //  设置导航栏状态
        setNavStatus: (state: AppState, action: PayloadAction<boolean>) => {
            state.navStatus = action.payload
        },

        //  设置当前选中的菜单项
        setSelectedKeys: (state: AppState, action: PayloadAction<string[]>) => {
            state.selectedKeys = action.payload
        },

        //  设置当前展开的 SubMenu 菜单项
        setOpenKeys: (state: AppState, action: PayloadAction<string[]>) => {
            state.openKeys = action.payload
        }
    }
})

export const {initApp, setNavStatus, setSelectedKeys, setOpenKeys} = appSlice.actions
export default appSlice.reducer
