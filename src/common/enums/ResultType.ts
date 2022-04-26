/**
 * 结果类型
 */
enum ResultType {
    UNAUTHORIZED = "401",       //  401: 未授权
    FORBIDDEN = "403",          //  403: 无权限
    NOT_FOUND = "404",          //  404: 内容不存在
    UNKNOWN = "500",            //  500: 服务器内部错误
    BUG_FIXING = "bug_fixing",  //  功能尚未实现
}

export default ResultType
