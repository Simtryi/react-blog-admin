import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setNavStatus} from "../../store/reducer/appSlice";
import {Layout, Avatar, Input, Button} from "antd";
import {BellOutlined, UserOutlined} from "@ant-design/icons";
import LayoutBreadcrumb from "../LayoutBreadcrumb";
import Icon from "../Icon";
import IconType from "../../common/enums/IconType";
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
                        <Avatar size="small" style={{backgroundColor: "rgb(245, 163, 92)"}} icon={<UserOutlined/>}/>
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
                    <LayoutBreadcrumb/>
                </div>
            </Layout.Header>
        </div>
    )
}

export default LayoutHeader
