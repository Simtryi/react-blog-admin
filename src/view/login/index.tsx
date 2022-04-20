import {FC, useState} from "react";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import classNames from "classnames";
import bg from "../../assets/img/bg.png";
import illustration from "../../assets/img/illustration.svg";
import avatar from "../../assets/img/avatar.svg"
import "./index.less";

/**
 * 登录页面
 */
const Login: FC = () => {
    const [userFocus, setUserFocus] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    return (
        <div className="login">
            <img src={bg} className="bg" alt="background"/>

            <div className="content">
                <div className="content-left">
                    <img src={illustration} alt="illustration"/>
                </div>

                <div className="content-right">
                    <div className="form">
                        <img src={avatar} alt="avatar"/>
                        <h2>Blog Admin</h2>

                        <div className={classNames("input-group", {"focus": userFocus})}>
                            <div className="icon">
                                <UserOutlined/>
                            </div>
                            <div>
                                <h5>用户名</h5>
                                <input
                                    type="text"
                                    className="input"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={(e) => setUserFocus(e.target.value.length !== 0)}
                                />
                            </div>
                        </div>

                        <div className={classNames("input-group", {"focus": pwdFocus})}>
                            <div className="icon">
                                <LockOutlined/>
                            </div>
                            <div>
                                <h5>密码</h5>
                                <input
                                    type="password"
                                    className="input"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={(e) => setPwdFocus(e.target.value.length !== 0)}
                                />
                            </div>
                        </div>

                        <button className="btn">登录</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
