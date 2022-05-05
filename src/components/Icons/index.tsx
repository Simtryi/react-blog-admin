import {FC} from "react";
import {createFromIconfontCN} from "@ant-design/icons";

/**
 * 图标类型
 */
export enum IconType {
    USER = "blog-user",                     //  用户图标
    USER_OUTLINED = "blog-user-outlined",   //  用户图标-线框风格
    ROLE = "blog-role",                     //  角色图标
    PERMISSION = "blog-permission",         //  权限图标
    SECURITY = "blog-security",             //  安全图标
    ACCOUNT = "blog-account",               //  账户图标
    PASSWORD = "blog-password",             //  密码图标
    MENU = "blog-menu",                     //  菜单图标
    HOME = "blog-home",                     //  主页图标
    CLOSE = "blog-close",                   //  关闭图标
    LOGOUT = "blog-logout",                 //  注销图标
}

interface IProps {
    type: IconType    //  图标类型
}

/**
 * 图标
 */
const Icons: FC<IProps> = (props: IProps) => {
    const IconFont = createFromIconfontCN({
        scriptUrl: "//at.alicdn.com/t/font_3346939_67zskpg5z7s.js"
    })

    return <IconFont type={props.type}/>
}

export default Icons
