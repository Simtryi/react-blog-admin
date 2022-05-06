import {ItemType} from "antd/es/menu/hooks/useItems";
import Icons, {IconType} from "../components/Icons";
import {TagsOutlined} from "@ant-design/icons";

/**
 * 全局菜单
 */
const menus: ItemType[] = [{
    label: "安全管理",
    key: "security",
    icon: <Icons type={IconType.SECURITY}/>,
    children: [{
        label: "用户管理",
        key: "user"
    }, {
        label: "角色管理",
        key: "role"
    }, {
        label: "资源管理",
        key: "resource"
    }]
}, {
    label: "标签管理",
    key: "tag",
    icon: <TagsOutlined/>
}]

export default menus
