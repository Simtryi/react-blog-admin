import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setNavStatus} from "../../store/reducer/appSlice";
import {Button} from "antd";
import {BellOutlined} from "@ant-design/icons";
import HeaderSearch from "./HeaderSearch";
import AvatarDropdown from "./AvatarDropdown";
import HeaderBreadcrumb from "./HeaderBreadcrumb";
import Icons, {IconType} from "../../components/Icons";
import "./index.less";

/**
 * 布局-头部
 */
const LayoutHeader: FC = () => {
    const app = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    //  设置导航栏状态
    const handleNavStatus = () => {
        dispatch(setNavStatus(!app.navStatus))
    }

    return (
        <div className="layout-header">
            <div className="header-top">
                <div className="top-left">
                    <div className="header-title">Blog Admin</div>
                </div>

                <div className="top-right">
                    <div className="header-item">
                        <HeaderSearch/>
                    </div>
                    <div className="header-item">
                        <BellOutlined className="notification"/>
                    </div>
                    <div className="header-item">
                        <AvatarDropdown/>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="header-menu">
                    <Button
                        type="ghost"
                        size="small"
                        icon={<Icons type={IconType.MENU}/>}
                        onClick={() => handleNavStatus()}
                    />
                </div>

                <div className="header-custom">
                    <Button type="ghost" size="small">D</Button>
                </div>

                <div className="header-breadcrumb">
                    <HeaderBreadcrumb/>
                </div>
            </div>
        </div>
    )
}

export default LayoutHeader
