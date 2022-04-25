import http from "../common/utils/request";

/**
 * 登录
 */
export function login(username: string, password: string): Promise<any> {
    return http.get("/admin/login", {params: {username, password}})
}
