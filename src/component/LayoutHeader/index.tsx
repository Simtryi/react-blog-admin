import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {initApp, setDropdownStatus, setNavStatus} from "../../store/reducer/appSlice";
import {Layout, Avatar, Input, Button, message} from "antd";
import {BellOutlined, UserOutlined} from "@ant-design/icons";
import LayoutBreadcrumb from "../LayoutBreadcrumb";
import {logout} from "../../api/admin";
import classNames from "classnames";
import Icon from "../Icon";
import IconType from "../../common/enums/IconType";
import "./index.less";
import {useNavigate} from "react-router-dom";
import {initUser} from "../../store/reducer/userSlice";

/**
 * 布局-头部
 */
const LayoutHeader: FC = () => {
    const app = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //  设置下拉菜单状态
    const handleDropdownStatus = () => {
        dispatch(setDropdownStatus(!app.dropdownStatue))
    }

    //  设置导航栏状态
    const handleNavStatus = () => {
        dispatch(setNavStatus(!app.navStatus))
    }

    //  注销
    const handleLogout = async () => {
        const response = await logout()
        //  注销成功
        if (response.code === "OK") {
            //  初始化应用
            dispatch(initApp())
            //  初始化用户
            dispatch(initUser())

            //  提示消息
            message.success("注销成功")
            //  跳转页面
            navigate("/login")
        }
    }

    return (
        <div className="layout-header">
            <Layout.Header className="header-top">
                <div className="top-left">
                    <div>BlogAdmin</div>
                </div>

                <div className="top-center">
                    <Input.Search placeholder="input search text" style={{width: 400}} />
                </div>

                <div className="top-right">
                    <div className="header-item">
                        <BellOutlined className="notification"/>
                    </div>
                    <div className="header-item">
                        <div className="header-dropdown">
                            <ul className={classNames("dropdown-menu", {
                                "dropdown-menu-close": !app.dropdownStatue,
                            })}>
                                <li>
                                    <div className="dropdown-item">
                                        <div className="dropdown-icon">
                                            <Icon type={IconType.USER_SETTING}/>
                                        </div>
                                        <div className="dropdown-title">
                                            账户设置
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown-item">
                                        <div className="dropdown-icon">
                                            <Icon type={IconType.LOGOUT}/>
                                        </div>
                                        <div className="dropdown-title" onClick={() => handleLogout()}>
                                            注销
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="header-avatar" onClick={() => handleDropdownStatus()}>
                            <Avatar
                                size="small"
                                style={{backgroundColor: "rgb(198, 154, 114)"}}
                                icon={<UserOutlined/>}
                            />
                        </div>
                    </div>
                </div>
            </Layout.Header>

            <Layout.Header className="header-bottom">
                <div className="header-menu">
                    <Button
                        type="ghost"
                        size="small"
                        icon={<Icon type={IconType.MENU}/>}
                        onClick={() => handleNavStatus()}
                    />
                </div>

                <div className="header-custom">
                    <Button type="ghost" size="small">D</Button>
                </div>

                <div className="header-breadcrumb">
                    <LayoutBreadcrumb routes={app.routes}/>
                </div>
            </Layout.Header>
        </div>
    )
}

export default LayoutHeader
