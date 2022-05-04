import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setPassword, setToken, setUsername} from "../../store/reducer/userSlice";
import {useSpring, animated} from "@react-spring/web";
import {login} from "../../services/admin";
import {message} from "antd";
import SVG from "react-inlinesvg";
import classNames from "classnames";
import Icons, {IconType} from "../../components/Icons";

import bg from "../../assets/img/bg.png";
import illustration from "../../assets/img/illustration.svg";
import avatar from "../../assets/img/avatar.svg"
import "./index.less";

/**
 * 登录页面
 */
const Login: FC = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [userFocus, setUserFocus] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    //  登录
    const handleLogin = async () => {
        //  登录
        const response = await login(user.username, user.password)

        //  登录成功
        if (response.code === "OK") {
            //  设置 token
            const token = response.data.authenticationSchema + response.data.token
            dispatch(setToken(token))

            //  提示消息
            message.success("登录成功")
            //  跳转页面
            navigate("/")
        }
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
                            <div className={classNames("input-group", {"focused": userFocus || user.username.length !== 0})}>
                                <div className="icon">
                                    <Icons type={IconType.USER}/>
                                </div>
                                <div>
                                    <h5>用户名</h5>
                                    <input
                                        type="text"
                                        className="input"
                                        value={user.username}
                                        onChange={(e) => dispatch(setUsername(e.target.value))}
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(user.username.length !== 0)}
                                    />
                                </div>
                            </div>
                        </animated.div>

                        <animated.div style={pwdInputStyles}>
                            <div className={classNames("input-group", {"focused": pwdFocus || user.password.length !== 0})}>
                                <div className="icon">
                                    <Icons type={IconType.PASSWORD}/>
                                </div>
                                <div>
                                    <h5>密码</h5>
                                    <input
                                        type="password"
                                        className="input"
                                        value={user.password}
                                        onChange={(e) => dispatch(setPassword(e.target.value))}
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(user.password.length !== 0)}
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
