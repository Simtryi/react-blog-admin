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
    password: string            //  密码
    nickname?: string           //  昵称
    permission: Permission[]    //  权限
}
