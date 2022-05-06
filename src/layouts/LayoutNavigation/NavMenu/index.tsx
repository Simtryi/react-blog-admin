import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHook";
import {setNavStatus, setOpenKeys, setSelectedKeys} from "../../../store/reducer/appSlice";
import {useNavigate} from "react-router-dom";
import {MenuInfo, SelectInfo} from "rc-menu/lib/interface";
import {Menu} from "antd";
import menus from "../../../route/menu.config";
import "./index.less";

/**
 * 导航栏-菜单
 */
const NavMenu: FC = () => {
    const app = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //  处理 SubMenu 展开/关闭 事件
    const handleOpenChange = (e: string[]) => {
        dispatch(setOpenKeys(e))
    }

    //  处理选中事件
    const handleSelect = (e: SelectInfo) => {
        const {selectedKeys} = e
        dispatch(setSelectedKeys(selectedKeys))
    }

    //  处理点击事件
    const handleClick = (e: MenuInfo) => {
        const {keyPath} = e

        //  拼接跳转路径
        let path = ""
        for (let i = keyPath.length - 1; i >= 0; i--) {
            path = path + "/" + keyPath[i]
        }

        //  关闭导航栏
        dispatch(setNavStatus(false))

        //  跳转路径
        navigate(path)
    }

    return (
        <Menu mode="inline"
              items={menus}
              openKeys={app.openKeys}
              selectedKeys={app.selectedKeys}
              onOpenChange={(e) => handleOpenChange(e)}
              onSelect={(e) => handleSelect(e)}
              onClick={(e) => handleClick(e)}
        />
    )
}

export default NavMenu
