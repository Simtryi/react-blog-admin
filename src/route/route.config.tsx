import React from "react";

/**
 * 路由元素
 */
export interface RouteItem {
    path?: string           //  路由路径
    index?: boolean         //  索引路由
    element?: any           //  路由组件
    meta?: RouteMeta        //  路由元数据
    children?: RouteItem[]  //  子路由
}

/**
 * 路由元数据
 */
export interface RouteMeta {
    name: string                    //  路由名称
    authority?: string | string[]   //  路由准入权限
}

/**
 * 全局路由表
 */
const routes: RouteItem[] = [{
    path: "/login",
    element: React.lazy(() => import("../pages/login")),
    meta: {name: "登录"}
}, {
    path: "/",
    element: React.lazy(() => import("../layouts/Layout")),
    meta: {name: "主页"},
    children: [{
        index: true,
        element: React.lazy(() => import("../pages/home"))
    }, {
        path: "account",
        element: React.lazy(() => import("../pages/account")),
        meta: {name: "账户设置"}
    }, {
        path: "security",
        element: React.lazy(() => import("../pages/security")),
        meta: {name: "安全管理"},
        children: [{
            index: true,
            element: React.lazy(() => import("../pages/security/user"))
        }, {
            path: "user",
            element: React.lazy(() => import("../pages/security/user")),
            meta: {name: "用户管理"}
        }, {
            path: "role",
            element: React.lazy(() => import("../pages/security/role")),
            meta: {name: "角色管理"}
        }, {
            path: "resource",
            element: React.lazy(() => import("../pages/security/resource")),
            meta: {name: "资源管理"}
        }]
    }, {
        path: "401",
        element: React.lazy(() => import("../pages/results/Unauthorized")),
        meta: {name: "未授权"}
    }, {
        path: "403",
        element: React.lazy(() => import("../pages/results/Forbidden")),
        meta: {name: "无权限"}
    }, {
        path: "404",
        element: React.lazy(() => import("../pages/results/NotFound")),
        meta: {name: "内容不存在"}
    }, {
        path: "500",
        element: React.lazy(() => import("../pages/results/Unknown")),
        meta: {name: "服务器内部错误"}
    }, {
        path: "*",
        element: React.lazy(() => import("../pages/results/NotFound")),
        meta: {name: "内容不存在"}
    }, ]
}]

export default routes
