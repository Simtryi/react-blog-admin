import {FC, useState} from "react";
import SVG from "react-inlinesvg";
import {useNavigate} from "react-router-dom";
import classNames from "classnames";
import Icon from "../../component/Icon";

import bg from "../../assets/img/bg.png";
import illustration from "../../assets/img/illustration.svg";
import avatar from "../../assets/img/avatar.svg"
import "./index.less";

/**
 * 登录页面
 */
const Login: FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userFocus, setUserFocus] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
    const navigate = useNavigate()

    //  登录
    const handleLogin = () => {
        navigate("/")
    }

    return (
        <div className="login">
            <img src={bg} className="bg" alt="background"/>

            <div className="content">
                <div className="content-left">
                    <SVG src={illustration} width={500} title="illustration"/>
                </div>

                <div className="content-right">
                    <div className="form">
                        <SVG src={avatar} width={100} height={100} title="avatar"/>
                        <h2>Blog Admin</h2>

                        <div className={classNames("input-group", {"focused": userFocus})}>
                            <div className="icon">
                                <Icon type="blog-user"/>
                            </div>
                            <div>
                                <h5>用户名</h5>
                                <input
                                    type="text"
                                    className="input"
                                    onChange={(e) => setUsername(e.target.value)}
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(username.length !== 0)}
                                />
                            </div>
                        </div>

                        <div className={classNames("input-group", {"focused": pwdFocus})}>
                            <div className="icon">
                                <Icon type="blog-password"/>
                            </div>
                            <div>
                                <h5>密码</h5>
                                <input
                                    type="password"
                                    className="input"
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(password.length !== 0)}
                                />
                            </div>
                        </div>

                        <button className="btn" onClick={() => handleLogin()}>登录</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
