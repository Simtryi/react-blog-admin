import React, {FC} from "react";
import LayoutHeader from "../LayoutHeader";
import LayoutNavigation from "../LayoutNavigation";
import {Outlet} from "react-router-dom";
import "./index.less";

/**
 * 布局
 */
const Layout: FC = () => {
    return (
        <div className="layout">
            <LayoutHeader/>
            <LayoutNavigation/>
            <div className="layout-content">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout
