import http from "../utils/request";
import Role from "../models/Role";

/**
 * 创建角色
 */
export function create(role: Role): Promise<any> {
    return http.post("/role/create", role)
}

/**
 * 删除角色
 */
export function del(id: number): Promise<any> {
    return http.get("/role/delete/" + id)
}

/**
 * 编辑角色
 */
export function edit(role: Role): Promise<any> {
    return http.post("/role/update", role)
}

/**
 * 分页
 */
export function list(pageNum?: number, pageSize?: number, name?: string): Promise<any> {
    return http.get("/role/list", {
        params: {
            pageNum,
            pageSize,
            name
        }
    })
}
