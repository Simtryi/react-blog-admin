import {FC} from "react";
import {Outlet} from "react-router-dom";

const Permission: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default Permission
