import {FC} from "react";
import {Layout, Menu} from "antd";
import {MenuMode} from "antd/lib/menu";

const {Header} = Layout
const {SubMenu} = Menu

interface IProps {
    mode: MenuMode  //  菜单模式
}

/**
 * 布局-菜单
 */
const LayoutMenu: FC<IProps> = (props: IProps) => {

    return (
        <div>
            layout menu
        </div>
    )
}

export default LayoutMenu
