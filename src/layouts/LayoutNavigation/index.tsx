import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setNavStatus, setOpenKeys, setSelectedKeys} from "../../store/reducer/appSlice";
import {useNavigate} from "react-router-dom";
import {Button, Drawer} from "antd";
import NavMenu from "./NavMenu";
import classNames from "classnames";
import Icons, {IconType} from "../../components/Icons";
import "./index.less";

/**
 * 布局-导航栏
 */
const LayoutNavigation: FC = () => {
    const app = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    /**
     * 处理点击事件
     */
    const handleClick = () => {
        //  设置当前展开的 SubMenu 菜单项为空
        dispatch(setOpenKeys([]))
        //  设置初始选中的菜单项为空
        dispatch(setSelectedKeys([]))

        //  跳转到主页
        navigate("/")
    }

    return (
        <div className={classNames("layout-nav", {"layout-nav-hidden": !app.navStatus})}>
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
                                <div className="item-title" onClick={() => handleClick()}>
                                    Home
                                </div>
                            </div>
                        </div>

                        <div className="nav-menu">
                            <NavMenu/>
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
