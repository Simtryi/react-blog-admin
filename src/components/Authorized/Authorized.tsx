import React, {FC} from "react";
import {useAppSelector} from "../../hooks/reduxHook";

interface IProps {
    authority: any    //  准入权限
    noMatch: any      //  未通过权限校验时展示
    children?: any    //  通过权限校验时渲染元素
}

/**
 * 权限
 */
const Authroized: FC<IProps> = (props: IProps) => {
    const user = useAppSelector(state => state.user)
    const {authority, noMatch, children} = props
    const renderChildren = typeof children === "undefined" ? null : children

    //  没有准入权限
    if (!authority) {
        return renderChildren
    }

    // //  数组处理
    // if (Array.isArray(authority)) {
    //     for (let item of user.authority) {
    //         if (authority.indexOf(item) !== -1) {
    //             return renderChildren
    //         }
    //     }
    //     return noMatch
    // }
    //
    // //  string 处理
    // if (typeof authority === "string") {
    //     for (let item of user.authority) {
    //         if (authority === item) {
    //             return renderChildren
    //         }
    //     }
    //     return noMatch
    // }
}

export default Authroized
