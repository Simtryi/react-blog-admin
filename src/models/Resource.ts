/**
 * 资源
 */
type Resource = {

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
     * 资源名称
     */
    name: string

    /**
     * 资源 URL，支持 Ant 路径匹配规则
     */
    url: string

    /**
     * 描述
     */
    description?: string

}

export default Resource
