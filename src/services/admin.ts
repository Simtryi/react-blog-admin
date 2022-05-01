import http from "../utils/request";

/**
 * 登录
 */
export function login(username: string, password: string): Promise<any> {
    return http.get("/admin/login", {params: {username, password}})
}

/**
 * 注销
 */
export function logout(): Promise<any> {
    return http.get("/admin/logout")
}

/**
 * 更改密码
 */
export function updatePassword(username: string, oldPassword: string, newPassword: string): Promise<any> {
    return http.get("/admin/password/update", {params: {username, oldPassword, newPassword}})
}
