import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setNavStatus} from "../../store/reducer/appSlice";
import {Button, Drawer} from "antd";
import LayoutMenu from "../LayoutMenu";
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

                        <div className="nav-menu">
                            <LayoutMenu/>
                        </div>
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
