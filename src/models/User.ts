import UserStatus from "./enums/UserStatus";

/**
 * 用户
 */
type User = {

    /**
     * 主键
     */
    id: number

    /**
     * 创建时间
     */
    createdAt: string

    /**
     * 更新时间
     */
    updatedAt: string

    /**
     * 用户名
     */
    username: string

    /**
     * 密码
     */
    password: string

    /**
     * 昵称
     */
    nickname: string

    /**
     * 邮箱
     */
    email: string

    /**
     * 头像
     */
    avatar: string

    /**
     * 状态
     */
    status: UserStatus

}

export default User
