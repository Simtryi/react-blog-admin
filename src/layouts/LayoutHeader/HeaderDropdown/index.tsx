import React, {FC} from "react";
import type {DropDownProps} from "antd/es/dropdown";
import {Dropdown} from "antd";
import classNames from "classnames";
import "./index.less";

type HeaderDropdownProps = {
    overlayClassName?: string   //  下拉根元素的类名称
    overlay: React.ReactNode | (() => React.ReactNode) | any    //  菜单
    placement?: "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight"    //  菜单弹出位置
} & Omit<DropDownProps, "overlay">

/**
 * 头部-下拉菜单
 */
const HeaderDropdown: FC<HeaderDropdownProps> = ({overlayClassName: cls, ...restProps}) => (
    <Dropdown overlayClassName={classNames(cls)} {...restProps}/>
)

export default HeaderDropdown
