/**
 * 标签
 */
type Tag = {

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
     * 标签名称
     */
    name: string

    /**
     * 颜色
     */
    color: string

    /**
     * 描述
     */
    description?: string

}

export default Tag
