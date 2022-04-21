import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import User from "../../model/User";

const initialState: User = {
    username: "",
    password: "",
    permission: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //  设置用户
        setUser: (state: User, action: PayloadAction<User>) => {
            state.username = action.payload.username
            state.password = action.payload.password
            state.permission = action.payload.permission
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer
