import Permission from "./permission";

/**
 * 用户
 */
interface User {
    username: string            //  用户名
    password: string            //  密码
    nickname?: string           //  昵称
    permission: Permission[]    //  权限
}

export default User
