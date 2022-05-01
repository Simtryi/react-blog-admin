import {FC} from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";
import SVG from "react-inlinesvg";
import unknown from "../../assets/img/unknown.svg";
import "./index.less";

/**
 * 服务器错误内部页面
 */
const Unknown: FC = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="results">
            <div className="content">
                <Result
                    icon={<SVG src={unknown} width={350}/>}
                    subTitle="服务器内部错误"
                    extra={<Button type="primary" onClick={() => handleClick()}>回到主页</Button>}
                />
            </div>
        </div>
    )
}

export default Unknown
