import http from "../utils/request";
import Resource from "../models/Resource";

/**
 * 创建资源
 */
export function create(resource: Resource): Promise<any> {
    return http.post("/resource/create", resource)
}

/**
 * 删除资源
 */
export function del(id: number): Promise<any> {
    return http.get("/resource/delete/" + id)
}

/**
 * 编辑资源
 */
export function edit(resource: Resource): Promise<any> {
    return http.post("/resource/update", resource)
}

/**
 * 分页
 */
export function list(pageNum?: number, pageSize?: number, keyword?: string): Promise<any> {
    return http.get("/resource/list", {
        params: {
            pageNum,
            pageSize,
            name: keyword,
            url: keyword
        }
    })
}
