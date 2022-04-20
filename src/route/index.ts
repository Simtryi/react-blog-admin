import React, {ReactNode} from "react";
import MenuType from "../common/enums/menuType";
import {HomeOutlined} from "@ant-design/icons";
import Home from "../view/home";

/**
 * 路由
 */
export interface NestedRoute {
    path: string               //  路径
    children?: NestedRoute[]   //  子路由
}

/**
 * 菜单路由
 */
export interface MenuRoute extends NestedRoute {
    name?: string                       //  菜单中文名
    code?: string                       //  菜单英文名
    icon?: string | React.FC            //  菜单图标
    component?: ReactNode | React.FC    //  菜单组件
    type?: MenuType                     //  菜单类型
    children?: MenuRoute[]              //  子菜单
}

/**
 * 菜单路由信息
 */
const menuRoutes: MenuRoute[] = [
    {
        path: "/",
        name: "首页",
        code: "home",
        icon: HomeOutlined,
        component: Home
    }
]

export default menuRoutes
