import {FC} from "react";
import {Link} from "react-router-dom";
import {Breadcrumb} from "antd";
import {Route} from "antd/lib/breadcrumb/Breadcrumb";
import "./index.less";

interface IProps {
    routes: Route[] //  面包屑路由
}

/**
 * 头部-面包屑
 */
const HeaderBreadcrumb: FC<IProps> = (props: IProps) => {
    const itemRender = (route: any, params: any, routes: any, paths: any) => {
        const length = routes.length

        if (length === 1) { //  只有一个路由
            return <span className="default">{route.breadcrumbName}</span>
        } else if (length > 1) {    //  超过一个路由
            const isFirst = routes.indexOf(route) === 0
            const isLast = routes.indexOf(route) === length - 1;

            if (isFirst) {  //  第一个路由
                return <Link to={paths.join('/')} className="first">{route.breadcrumbName}</Link>
            } else if (isLast) {    //  最后一个路由
                return <span className="last">{route.breadcrumbName}</span>
            } else {    //  中间路由
                return <Link to={paths.join('/')} className="middle">{route.breadcrumbName}</Link>
            }
        }
    }

    return (
        <Breadcrumb itemRender={itemRender} routes={props.routes} separator=""/>
    )
}

export default HeaderBreadcrumb
