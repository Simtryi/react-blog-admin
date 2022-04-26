import {FC} from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";
import ResultType from "../../common/enums/ResultType";
import SVG from "react-inlinesvg";
import unauthorized from "../../assets/img/unauthorized.svg";
import forbidden from "../../assets/img/forbidden.svg";
import not_found from "../../assets/img/not_found.svg";
import unknown from "../../assets/img/unknown.svg";
import bug_fixing from "../../assets/img/bug_fixing.svg";
import "./index.less";

interface IProps {
    type: ResultType    //  结果类型
}

/**
 * 结果
 */
const Results: FC<IProps> = (props: IProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="results">
            <div className="content">
                {
                    props.type === ResultType.UNAUTHORIZED &&
                    <Result
                        icon={<SVG src={unauthorized} width={350}/>}
                        subTitle="未授权，禁止访问"
                        extra={<Button type="primary" onClick={() => handleClick()}>回到首页</Button>}
                    />
                }

                {
                    props.type === ResultType.FORBIDDEN &&
                    <Result
                        icon={<SVG src={forbidden} width={350}/>}
                        subTitle="无权限，禁止访问"
                        extra={<Button type="primary" onClick={() => handleClick()}>回到首页</Button>}
                    />
                }

                {
                    props.type === ResultType.NOT_FOUND &&
                    <Result
                        icon={<SVG src={not_found} width={350}/>}
                        subTitle="内容不存在"
                        extra={<Button type="primary" onClick={() => handleClick()}>回到首页</Button>}
                    />
                }

                {
                    props.type === ResultType.UNKNOWN &&
                    <Result
                        icon={<SVG src={unknown} width={350}/>}
                        subTitle="服务器内部错误"
                        extra={<Button type="primary" onClick={() => handleClick()}>回到首页</Button>}
                    />
                }

                {
                    props.type === ResultType.BUG_FIXING &&
                    <Result
                        icon={<SVG src={bug_fixing} width={350}/>}
                        subTitle="功能尚未实现"
                        extra={<Button type="primary" onClick={() => handleClick()}>回到首页</Button>}
                    />
                }
            </div>
        </div>
    )
}

export default Results
