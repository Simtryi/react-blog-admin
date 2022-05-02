import {ItemType} from "antd/es/menu/hooks/useItems";
import Icons, {IconType} from "../components/Icons";

/**
 * 全局菜单
 */
const menus: ItemType[] = [{
    label: "用户管理",
    key: "user",
    icon: <Icons type={IconType.USER_OUTLINED}/>
}]

export default menus
