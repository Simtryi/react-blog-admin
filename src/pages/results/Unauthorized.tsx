import {FC} from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";
import SVG from "react-inlinesvg";
import unauthorized from "../../assets/img/unauthorized.svg";
import "./index.less";

/**
 * 未授权页面
 */
const Unauthorized: FC = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="results">
            <div className="content">
                <Result
                    icon={<SVG src={unauthorized} width={350}/>}
                    subTitle="未授权，禁止访问"
                    extra={<Button type="primary" onClick={() => handleClick()}>回到主页</Button>}
                />
            </div>
        </div>
    )
}

export default Unauthorized
