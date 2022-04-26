import {createSlice, PayloadAction} from "@reduxjs/toolkit";

/**
 * 用户状态
 */
interface UserState {
    username: string            //  用户名
    password: string            //  用户密码
    token: string | null        //  用户 token
}

const initialState: UserState = {
    username: "",
    password: "",
    token: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //  初始化用户
        initUser: (state: UserState) => {
            state.username = initialState.username
            state.password = initialState.password
            state.token = initialState.token
        },

        //  设置用户名
        setUsername: (state: UserState, action: PayloadAction<string>) => {
            state.username = action.payload
        },

        //  设置用户密码
        setPassword: (state: UserState, action: PayloadAction<string>) => {
            state.password = action.payload
        },

        //  设置用户 token
        setToken: (state: UserState, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
})

export const {initUser, setUsername, setPassword, setToken} = userSlice.actions
export default userSlice.reducer
