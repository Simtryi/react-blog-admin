import React, {FC} from "react";
import classNames from "classnames";
import ArrowDirection from "../../common/enums/ArrowDirection";
import IconType from "../../common/enums/IconType";
import Icon from "../Icon";
import "./index.less";

/**
 * 下拉菜单元素
 */
interface DropdownItem {
    name: string    //  菜单名称
    link?: string   //  菜单链接
    icon?: IconType //  菜单图标
}

interface IProps {
    visible: boolean                 //  菜单是否显示
    items: DropdownItem[]            //  下拉菜单元素
    arrow?: boolean                  //  下拉框箭头是否显示
    arrowDirection?: ArrowDirection  //  箭头指向
}

/**
 * 下拉菜单
 */
const Dropdown: FC<IProps> = (props: IProps) => {
    return (
        <div className="dropdown">
            <ul className={classNames("dropdown-menu", {
                "dropdown-menu-close": !props.visible,
                "dropdown-arrow-left": props.arrow && (props.arrowDirection === ArrowDirection.LEFT),
                "dropdown-arrow-right": props.arrow && (props.arrowDirection === ArrowDirection.RIGHT),
            })}>
                {
                    props.items.map((item: DropdownItem, index: number) =>
                        <li key={index}>
                            <div className="dropdown-item">
                                <div className="dropdown-icon">
                                    {item.icon && <Icon type={item.icon}/>}
                                </div>
                                <a href={item.link} className="dropdown-link">
                                    {item.name}
                                </a>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Dropdown
