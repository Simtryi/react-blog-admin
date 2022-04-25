import {Route} from "antd/lib/breadcrumb/Breadcrumb";

/**
 * 应用
 */
export default interface App {
    navStatus: boolean      //  导航栏状态 true: 打开, false: 关闭
    dropdownStatue: boolean //  下拉菜单状态 true: 打开, false: 关闭
    routes: Route[]         //  面包屑路由
}
