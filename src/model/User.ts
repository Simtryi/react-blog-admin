/**
 * 权限
 */
export interface Permission {
    code: string            //  权限英文名
    name: string            //  权限中文名
    description?: string    //  权限描述
}

/**
 * 用户
 */
export default interface User {
    username: string            //  用户名
    password: string            //  用户密码
    nickname?: string           //  用户昵称
    token: string | null        //  用户 token
    permission: Permission[]    //  用户权限
}
