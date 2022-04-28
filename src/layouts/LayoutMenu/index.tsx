import React, {FC} from "react";
import {Menu} from "antd";
import {AppstoreAddOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import "./index.less";

/**
 * 布局-菜单
 */
const LayoutMenu: FC = () => {
    return (
        <Menu mode="inline">
            <Menu.SubMenu key="sub1" title="用户管理" icon={<MailOutlined/>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="sub2" title="用户管理" icon={<AppstoreAddOutlined/>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="sub3" title="用户管理" icon={<SettingOutlined/>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}

export default LayoutMenu
