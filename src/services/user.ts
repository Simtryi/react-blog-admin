import http from "../utils/request";
import User from "../models/User";

/**
 * 创建用户
 */
export function create(user: User) {
    return http.post("/user/create", user)
}

/**
 * 删除用户
 */
export function del(id: number) {
    return http.get("/user/delete/" + id)
}

/**
 * 编辑用户
 */
export function edit(user: User) {
    return http.post("/user/update", user)
}

/**
 * 分页
 */
export function list(pageNum?: number, pageSize?: number, keyword?: string) {
    return http.get("/user/list", {
        params: {
            pageNum,
            pageSize,
            keyword
        }
    })
}
