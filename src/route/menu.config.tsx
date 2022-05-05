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
}]

export default menus
