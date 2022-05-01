import {FC} from "react";
import {Outlet} from "react-router-dom";

/**
 * 用户管理页面
 */
const User: FC = () => {
    return (
        <div>
            用户管理
            <Outlet/>
        </div>
    )
}

export default User
