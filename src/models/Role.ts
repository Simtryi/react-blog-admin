import RoleStatus from "./enums/RoleStatus";

/**
 * 角色
 */
type Role = {

    /**
     * 主键
     */
    id?: number

    /**
     * 创建时间
     */
    createdAt?: string

    /**
     * 更新时间
     */
    updatedAt?: string

    /**
     * 角色名称
     */
    name: string

    /**
     * 描述
     */
    description?: string

    /**
     * 用户数量
     */
    count?: number

    /**
     * 状态
     */
    status?: RoleStatus

}

export default Role
