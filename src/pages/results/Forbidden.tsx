import {FC} from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";
import SVG from "react-inlinesvg";
import forbidden from "../../assets/img/forbidden.svg";
import "./index.less";

/**
 * 无权限页面
 */
const Forbidden: FC = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate("/")
    }

    return (
        <div className="results">
            <div className="content">
                <Result
                    icon={<SVG src={forbidden} width={350}/>}
                    subTitle="无权限，禁止访问"
                    extra={<Button type="primary" onClick={onClick}>回到主页</Button>}
                />
            </div>
        </div>
    )
}

export default Forbidden
