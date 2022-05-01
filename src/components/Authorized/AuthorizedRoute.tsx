import {FC} from "react";
import Authorized from "./Authorized";
import {Navigate, Route} from "react-router-dom";

interface IProps {
    path: string            //  路由路径
    element: any            //  路由渲染元素
    authority: any          //  路由准入权限
    redirect: string        //  路由重定向地址
}

/**
 * 权限路由
 */
const AuthorizedRoute: FC<IProps> = (props: IProps) => {
    const {path, element, authority, redirect} = props

    return (
        <Authorized
            authority={authority}
            noMatch={<Navigate to={redirect}/>}
        >
            <Route
                path={path}
                element={element}
            />
        </Authorized>
    )
}

export default AuthorizedRoute
