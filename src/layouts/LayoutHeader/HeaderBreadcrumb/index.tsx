import {FC, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Breadcrumb} from "antd";
import {Route} from "antd/lib/breadcrumb/Breadcrumb";
import {breadcrumbMap} from "../../../route";
import "./index.less";

/**
 * 头部-面包屑
 */
const HeaderBreadcrumb: FC = () => {
    const [routes, setRoutes] = useState<Route[]>([])
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            setRoutes([{
                path: "/",
                breadcrumbName: "主页"
            }])
            return
        }

        if (!breadcrumbMap.get(location.pathname)) {
            setRoutes([{
                path: "/404",
                breadcrumbName: "内容不存在"
            }])
            return
        }

        const pathList = location.pathname.slice(1).split("/")
        const nameList = breadcrumbMap.get(location.pathname).slice(1).split("/")

        const routeList: Route[] = []
        for (let i = 0; i < pathList.length; i++) {
            routeList.push({
                path: pathList[i],
                breadcrumbName: nameList[i]
            })
        }
        setRoutes(routeList)
    }, [location.pathname])

    const itemRender = (route: any, params: any, routes: any, paths: any) => {
        const length = routes.length

        if (length === 1) { //  只有一个路由
            return <div className="default">{route.breadcrumbName}</div>
        } else if (length > 1) {    //  超过一个路由
            const isFirst = routes.indexOf(route) === 0
            const isLast = routes.indexOf(route) === length - 1;

            if (isFirst) {  //  第一个路由
                return <Link to={paths.join('/')} className="first">{route.breadcrumbName}</Link>
            } else if (isLast) {    //  最后一个路由
                return <div className="last">{route.breadcrumbName}</div>
            } else {    //  中间路由
                return <Link to={paths.join('/')} className="middle">{route.breadcrumbName}</Link>
            }
        }
    }

    return (
        <Breadcrumb itemRender={itemRender} routes={routes} separator=""/>
    )
}

export default HeaderBreadcrumb
