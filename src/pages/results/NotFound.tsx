import {FC} from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";
import SVG from "react-inlinesvg";
import not_found from "../../assets/img/not_found.svg";
import "./index.less";

/**
 * 内容不存在页面
 */
const NotFound: FC = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate("/")
    }

    return (
        <div className="results">
            <div className="content">
                <Result
                    icon={<SVG src={not_found} width={350}/>}
                    subTitle="内容不存在"
                    extra={<Button type="primary" onClick={onClick}>回到主页</Button>}
                />
            </div>
        </div>
    )
}

export default NotFound
