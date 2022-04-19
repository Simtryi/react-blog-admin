import {ReactNode} from "react";
import MenuType from "./enums/menuType";

/**
 * 路由
 */
export interface Route {
    path: string         //  路径
    children?: Route[]   //  子路由
}

/**
 * 菜单
 */
export interface Menu extends Route {
    name?: string               //  菜单名称
    icon?: string | ReactNode   //  菜单图标
    type?: MenuType             //  菜单类型
    locale?: string
    children?: Menu[]           //  子菜单

    [key: string]: any
}
