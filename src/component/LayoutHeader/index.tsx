import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {useNavigate} from "react-router-dom";
import "./index.less"



/**
 * 布局-头部
 */
const LayoutHeader: FC = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="header-top">

            </div>

            <div className="header-bottom">

            </div>
        </div>
    )
}

export default LayoutHeader
