import React, {useEffect} from "react";
import {Form, FormInstance, Input, message, Select} from "antd";
import {create, edit} from "../../services/role";
import Role from "../../models/Role";

interface IProps {
    role?: Role //  角色
    mode?: string   //  表单模式, create: 创建，edit: 编辑
    refresh?: () => void    //  刷新表格数据回调函数
    beforeSubmit?: (values: any) => void    //  表单提交前回调函数
    afterSubmit?: (values: any, form: FormInstance<any>) => void    //  表单提交后回调函数
}

/**
 * 角色表单
 */
const RoleForm = (props: React.PropsWithChildren<IProps>, ref?: React.ForwardedRef<FormInstance>) => {
    const [form] = Form.useForm()

    useEffect(() => {
        form.resetFields(["name", "description", "status"])
    })

    //  处理表单提交
    const onFinish = (values: any) => {
        const {name, description, status} = values
        const role: Role = {name, description, status}

        props.beforeSubmit?.(values)

        if (props.mode === "create") {
            createRole(role)
        } else {
            role.id = props.role?.id
            editRole(role)
        }

        props.afterSubmit?.(values, form)
    }

    //  创建角色
    const createRole = async (role: Role) => {
        const response = await create(role)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("创建成功")
        }
    }

    //  编辑角色
    const editRole = async (role: Role) => {
        const response = await edit(role)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("编辑成功")
        }
    }

    return (
        <Form
            ref={ref}
            form={form}
            initialValues={props.role}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
        >
            <Form.Item
                label="名称"
                name="name"
                rules={[{required: true, message: "请输入角色名称"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="描述"
                name="description"
            >
                <Input.TextArea rows={3} allowClear/>
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

export default RoleForm
