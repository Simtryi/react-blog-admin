import {ItemType} from "antd/es/menu/hooks/useItems";
import Icons, {IconType} from "../components/Icons";

/**
 * 全局菜单
 */
const menus: ItemType[] = [{
    label: "用于管理",
    key: "user",
    icon: <Icons type={IconType.USER}/>,
    children: [{
        label: "添加用户",
        key: "add"
    }]
}]

export default menus
