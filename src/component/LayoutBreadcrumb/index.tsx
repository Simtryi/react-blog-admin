import {FC} from "react";
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import "./index.less";

const routes = [
    {
        path: 'index',
        breadcrumbName: 'home'
    },
    {
        path: 'first',
        breadcrumbName: 'first'
    },
    {
        path: 'second',
        breadcrumbName: 'second',
    }
]

/**
 * 布局-面包屑
 */
const LayoutBreadcrumb: FC = () => {
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
        <Breadcrumb itemRender={itemRender} routes={routes} separator=""/>
    )
}

export default LayoutBreadcrumb
