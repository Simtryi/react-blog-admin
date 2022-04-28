import IconType from "../common/enums/IconType";

/**
 * 菜单元素
 */
interface MenuItem {
    title: string           //  菜单名称
    key: string             //  菜单路径
    fullTitle?: string      //  菜单全名称
    fullPath?: string       //  菜单全路径
    icon?: IconType         //  菜单图标
    component?: any         //  菜单组件
    children?: MenuItem[]   //  子菜单
}

/**
 * 全局菜单
 */
export let menus: MenuItem[] = [
    {
        title: "首页",
        key: "/home",
        component: () => import("../pages/home"),
    },
    {
        title: "账户设置",
        key: "/account",
        component: () => import("../pages/account"),
    }
]

/**
 * 处理菜单，拼接菜单的全名称和全路径
 */
const handleMenu = (menus: MenuItem[], parentTitle: string, parentPath: string) => {
    menus.forEach((menu: MenuItem) => {
        menu.fullTitle = parentTitle ? `${parentTitle}/${menu.title}` : menu.title
        menu.fullPath = parentPath ? parentPath + menu.key : menu.key

        if (menu.children) {
            menu.children.forEach((subMenu: MenuItem) => {
                subMenu.fullTitle = `${menu.title}/${subMenu.title}`
                subMenu.fullPath = menu.key + subMenu.key

                if (subMenu.children) {
                    handleMenu(subMenu.children, subMenu.fullTitle, subMenu.fullPath)
                }
            })
        }
    })
}

handleMenu(menus, "", "")



/**
 * 全局路由
 */
export let routers: any[] = []

/**
 * 处理路由
 */
const handleRouter = (menus: any[]) => {
    menus.map(menu => {
        if (menu.component) {
            routers.push(menu)
        }

        if (menu.children) {
            handleRouter(menu.children)
        }
    })
}

/**
 * 处理权限
 */
export const handleAuth = () => {

}

