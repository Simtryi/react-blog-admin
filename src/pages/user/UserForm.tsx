import React from "react";
import {Form, FormInstance, Input, message} from "antd";
import User from "../../models/User";
import {create, edit} from "../../services/user";

interface IProps {
    user?: User //  用户
    mode?: string    //  表单模式, create: 创建，edit: 编辑
    beforeSubmit?: (values: any) => void
    afterSubmit?: (values: any, form: FormInstance<any>) => void
}

/**
 * 用户表单
 */
const UserForm = (props: React.PropsWithChildren<IProps>, ref?: React.ForwardedRef<FormInstance>) => {
    const [form] = Form.useForm()

    //  处理表单提交
    const handleFinish = (values: any) => {
        const {username, password, nickname, email} = values
        const user: User = {username, password, nickname, email}

        props.beforeSubmit?.(values)

        if (props.mode === "create") {
            createUser(user)
        } else {
            editUser(user)
        }

        props.afterSubmit?.(values, form)
    }

    //  创建用户
    const createUser = async (user: User) => {
        await create(user)
        message.success("创建成功")
    }

    //  编辑用户
    const editUser = async (user: User) => {
        await edit(user)
        message.success("编辑成功")
    }

    return (
        <Form
            ref={ref}
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={handleFinish}
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[{required: true, message: "请输入用户名"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="用户密码"
                name="password"
                rules={[{required: true, message: "请输入用户密码"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="用户昵称"
                name="nickname"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="用户邮箱"
                name="email"
                rules={[{type: "email", message: "输入不合法"}]}
            >
                <Input />
            </Form.Item>
        </Form>
    )
}

export default UserForm
