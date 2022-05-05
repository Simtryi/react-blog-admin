import {FC} from "react";
import {Outlet} from "react-router-dom";

/**
 * 安全管理
 */
const Security: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default Security
