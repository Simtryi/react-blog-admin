import http from "../utils/request";

/**
 * 分页
 */
export function list(pageNum?: number, pageSize?: number, keyword?: string): Promise<any> {
    return http.get("/user/list", {
        params: {
            pageNum,
            pageSize,
            keyword
        }
    })
}
