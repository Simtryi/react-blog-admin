import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setNavStatus} from "../../store/reducer/appSlice";
import {Button, Menu, Drawer} from "antd";
import {AppstoreAddOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import Icon from "../Icon";
import IconType from "../../common/enums/IconType";
import classNames from "classnames";
import "./index.less";

/**
 * 布局-导航栏
 */
const LayoutNavigation: FC = () => {
    const app = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    return (
        <div className="layout-nav">
                <Drawer
                    className="nav-drawer"
                    placement="left"
                    closable={false}
                    visible={app.navStatus}
                    getContainer={false}
                >
                    <div className="nav-content">
                        <div className="nav-home">
                            <div className="nav-item">
                                <div className="item-icon">
                                    <Icon type={IconType.HOME}/>
                                </div>
                                <div className="item-title">
                                    Home
                                </div>
                            </div>
                        </div>

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
                    </div>
                </Drawer>

                <div className={classNames("nav-open", {"nav-close": !app.navStatus})}>
                    <Button
                        type="ghost"
                        size="small"
                        icon={<Icon type={IconType.CLOSE}/>}
                        onClick={() => dispatch(setNavStatus(false))}
                    />
                </div>
            </div>
    )
}

export default LayoutNavigation
