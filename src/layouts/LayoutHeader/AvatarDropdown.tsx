import React, {FC} from "react";
import {Avatar, Menu, message} from "antd";
import {ItemType} from "antd/es/menu/hooks/useItems";
import type {MenuInfo} from "rc-menu/lib/interface";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {useNavigate} from "react-router-dom";
import {initApp} from "../../store/reducer/appSlice";
import {initUser} from "../../store/reducer/userSlice";
import {logout} from "../../services/admin";
import HeaderDropdown from "./HeaderDropdown";
import Icons, {IconType} from "../../components/Icons";

/**
 * 头部-头像
 */
const AvatarDropdown: FC = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //  菜单元素
    const items: ItemType[] = [{
        label: user.username,
        key: user.username,
        disabled: true
    }, {
        label: "账户设置",
        key: "account",
        icon: <Icons type={IconType.ACCOUNT}/>
    }, {
        label: "注销",
        key: "logout",
        icon: <Icons type={IconType.LOGOUT}/>
    }]

    //  处理菜单点击事件
    const handleMenuClick = (e: MenuInfo) => {
        const {key} = e
        if (key === "account") {
            navigate("/account")
        } else if (key === "logout") {
            handleLogout()
        }
    }

    //  注销
    const handleLogout = async () => {
        //  注销
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
        <HeaderDropdown
            overlayClassName="avatar-dropdown"
            overlay={<Menu items={items} onClick={(e) => handleMenuClick(e)}/>}
        >
            <Avatar
                size="small"
                src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
        </HeaderDropdown>
    )
}

export default AvatarDropdown
