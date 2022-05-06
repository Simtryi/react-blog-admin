import http from "../utils/request";
import Tag from "../models/Tag";

/**
 * 创建标签
 */
export function create(tag: Tag): Promise<any> {
    return http.post("/tag/create", tag)
}

/**
 * 删除标签
 */
export function del(id: number): Promise<any> {
    return http.get("/tag/delete/" + id)
}

/**
 * 编辑标签
 */
export function edit(tag: Tag): Promise<any> {
    return http.post("/tag/update", tag)
}

/**
 * 分页
 */
export function list(pageNum?: number, pageSize?: number, keyword?: string): Promise<any> {
    return http.get("/tag/list", {
        params: {
            pageNum,
            pageSize,
            name: keyword
        }
    })
}
