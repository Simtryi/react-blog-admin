import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setNavStatus} from "../../store/reducer/appSlice";
import {Button, Drawer, Menu} from "antd";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {MailOutlined} from "@ant-design/icons";
import classNames from "classnames";
import Icons from "../../components/Icons";
import IconType from "../../common/enums/IconType";
import "./index.less";

/**
 * 布局-导航栏
 */
const LayoutNavigation: FC = () => {
    const app = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    //  菜单元素
    const items: ItemType[] = [{
        label: "用户管理",
        key: "user",
        title: "用户管理",
        icon: <MailOutlined/>,
        children: [{
            label: "Option 1",
            key: "option1"
        }, {
            label: "Option 2",
            key: "option2"
        }]
    }, {
        label: "用户管理2",
        key: "use2r",
        title: "用户管理2",
        icon: <MailOutlined/>,
        children: [{
            label: "Option 12",
            key: "option12"
        }, {
            label: "Option 22",
            key: "option22"
        }]
    }]

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
                                    <Icons type={IconType.HOME}/>
                                </div>
                                <div className="item-title">
                                    Home
                                </div>
                            </div>
                        </div>

                        <div className="nav-menu">
                            <Menu mode="inline" items={items}/>
                        </div>
                    </div>
                </Drawer>

                <div className={classNames("nav-open", {"nav-close": !app.navStatus})}>
                    <Button
                        type="ghost"
                        size="small"
                        icon={<Icons type={IconType.CLOSE}/>}
                        onClick={() => dispatch(setNavStatus(false))}
                    />
                </div>
            </div>
    )
}

export default LayoutNavigation
