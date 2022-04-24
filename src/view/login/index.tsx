import {FC, useState} from "react";
import SVG from "react-inlinesvg";
import {useNavigate} from "react-router-dom";
import {useSpring, animated} from "@react-spring/web";
import classNames from "classnames";
import Icon from "../../component/Icon";
import IconType from "../../common/enums/IconType";

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

    //  标题动画样式
    const titleStyles = useSpring({
        from: {y: 100, opacity: 0},
        to: {y: 0, opacity: 1},
        delay: 100
    })

    //  用户名输入框动画样式
    const userInputStyles = useSpring({
        from: {y: 100, opacity: 0},
        to: {y: 0, opacity: 1},
        delay: 200
    })

    //  密码输入框动画样式
    const pwdInputStyles = useSpring({
        from: {y: 100, opacity: 0},
        to: {y: 0, opacity: 1},
        delay: 300
    })

    //  登录按钮动画样式
    const btnStyles = useSpring({
        from: {y: 100, opacity: 0},
        to: {y: 0, opacity: 1},
        delay: 400
    })

    return (
        <div className="login">
            <img src={bg} className="bg" alt="background"/>

            <div className="content">
                <div className="content-left">
                    <SVG src={illustration} width={500}/>
                </div>

                <div className="content-right">
                    <div className="form">
                        <SVG src={avatar} width={100} height={100}/>

                        <animated.div style={titleStyles}>
                            <h2>Blog Admin</h2>
                        </animated.div>

                        <animated.div style={userInputStyles}>
                            <div className={classNames("input-group", {"focused": userFocus})}>
                                <div className="icon">
                                    <Icon type={IconType.USER}/>
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
                        </animated.div>

                        <animated.div style={pwdInputStyles}>
                            <div className={classNames("input-group", {"focused": pwdFocus})}>
                                <div className="icon">
                                    <Icon type={IconType.PASSWORD}/>
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
                        </animated.div>

                        <animated.div style={btnStyles}>
                            <button className="btn" onClick={() => handleLogin()}>登录</button>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
