import {ItemType} from "antd/es/menu/hooks/useItems";
import Icons, {IconType} from "../components/Icons";

/**
 * 全局菜单
 */
const menus: ItemType[] = [{
    label: "用户管理",
    key: "user",
    icon: <Icons type={IconType.USER_OUTLINED}/>
}, {
    label: "角色管理",
    key: "role",
    icon: <Icons type={IconType.ROLE}/>
}, {
    label: "权限管理",
    key: "permission",
    icon: <Icons type={IconType.PERMISSION}/>,
    children: [{
        label: "资源列表",
        key: "resource"
    }]
}]

export default menus
