import React, {useEffect} from "react";
import {Form, FormInstance, Input, message, Select} from "antd";
import User from "../../../models/User";
import {create, edit} from "../../../services/user";
import Icons, {IconType} from "../../../components/Icons";

interface IProps {
    user?: User //  用户
    mode?: string   //  表单模式, create: 创建，edit: 编辑
    refresh?: () => void    //  刷新表格数据回调函数
    beforeSubmit?: (values: any) => void    //  表单提交前回调函数
    afterSubmit?: (values: any, form: FormInstance<any>) => void    //  表单提交后回调函数
}

/**
 * 用户表单
 */
const UserForm = (props: React.PropsWithChildren<IProps>, ref?: React.ForwardedRef<FormInstance>) => {
    const [form] = Form.useForm()

    useEffect(() => {
        form.resetFields(["username", "nickname", "email", "status"])
    })

    //  处理表单提交
    const handleFinish = (values: any) => {
        const {username, password, nickname, email, status} = values
        const user: User = {username, password, nickname, email, status}

        props.beforeSubmit?.(values)

        if (props.mode === "create") {
            createUser(user)
        } else {
            user.id = props.user?.id
            editUser(user)
        }

        props.afterSubmit?.(values, form)
    }

    //  创建用户
    const createUser = async (user: User) => {
        const response = await create(user)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("创建成功")
        }
    }

    //  编辑用户
    const editUser = async (user: User) => {
        const response = await edit(user)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("编辑成功")
        }
    }

    return (
        <Form
            ref={ref}
            form={form}
            initialValues={props.user}
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
                label="密码"
                name="password"
                rules={[{required: true, message: "请输入用户密码"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="昵称"
                name="nickname"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="邮箱"
                name="email"
                rules={[{type: "email", message: "输入不合法"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="状态"
                name="status"
            >
                <Select allowClear>
                    <Select.Option value="OK">正常</Select.Option>
                    <Select.Option value="DISABLED">禁用</Select.Option>
                </Select>
            </Form.Item>
        </Form>
    )
}

export default UserForm
