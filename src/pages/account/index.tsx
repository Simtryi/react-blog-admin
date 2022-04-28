import {FC} from "react";
import {Button, Form, Input, message} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {setPassword} from "../../store/reducer/userSlice";
import {updatePassword} from "../../services/admin";
import SVG from "react-inlinesvg";
import account from "../../assets/img/account.svg";
import "./index.less";

/**
 * 账户设置页面
 */
const Account: FC = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    //  处理表单提交
    const handleFinish = async (values: any) => {
        if (values.newPassword !== values.confirmPassword) {
            message.warning("密码不匹配")
            return
        }

        //  更改密码
        const response = await updatePassword(user.username, values.oldPassword, values.newPassword)
        //  密码更改成功
        if (response.code === "OK") {
            //  设置新密码
            dispatch(setPassword(values.newPassword))

            //  提示消息
            message.success("密码更改成功")
        }
    }

    return (
        <div className="account">
            <div className="content">
                <div className="content-left">
                    <SVG src={account} width={350}/>
                </div>

                <div className="content-right">
                    <Form
                        className="form"
                        layout="vertical"
                        requiredMark={false}
                        onFinish={handleFinish}
                    >
                        <Form.Item
                            label="当前密码"
                            name="oldPassword"
                            rules={[{required: true, message: "请输入当前密码!"}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            label="新密码"
                            name="newPassword"
                            rules={[{required: true, message: "请输入新密码!"}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            label="确认新密码"
                            name="confirmPassword"
                            rules={[{required: true, message: "请确认新密码!"}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="ghost" htmlType="submit">
                                <span>更改密码</span>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Account
