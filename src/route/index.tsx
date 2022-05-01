import React, {FC} from "react";
import {RouteObject, useRoutes} from "react-router-dom";
import routes, {RouteItem} from "./route.config";

/**
 * 面包屑Map, path => breadcrumbName
 */
export const breadcrumbMap = new Map()

/**
 * 获取路由数据
 */
export function getRouteData(target: RouteObject[], source: RouteItem[], parentPath: string, parentName: string) {
    source.forEach((item: RouteItem) => {
        let fullPath = ""
        let fullName = ""

        if (item.path && item.meta?.name && !item.path.startsWith("/")) {
            fullPath = parentPath + "/" + item.path
            fullName = parentName + "/" + item.meta.name
            breadcrumbMap.set(fullPath, fullName)
        }

        let route: RouteObject = {
            path: item.path,
            index: item.index,
            element: <item.element/>
        }
        target.push(route)

        if (item.children) {
            route.children = []
            getRouteData(route.children, item.children, fullPath, fullName)
        }
    })
}

/**
 * 全局路由
 */
const Route: FC = () => {
    const routeList: RouteObject[] = []
    getRouteData(routeList, routes, "", "")

    return useRoutes(routeList)
}

export default Route
