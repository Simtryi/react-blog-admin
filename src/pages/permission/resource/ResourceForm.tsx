import React, {useEffect} from "react";
import {Form, FormInstance, Input, message} from "antd";
import {create, edit} from "../../../services/resource";
import Resource from "../../../models/Resource";

interface IProps {
    resource?: Resource //  资源
    mode?: string   //  表单模式, create: 创建，edit: 编辑
    refresh?: () => void    //  刷新表格数据回调函数
    beforeSubmit?: (values: any) => void    //  表单提交前回调函数
    afterSubmit?: (values: any, form: FormInstance<any>) => void    //  表单提交后回调函数
}

/**
 * 资源表单
 */
const RoleForm = (props: React.PropsWithChildren<IProps>, ref?: React.ForwardedRef<FormInstance>) => {
    const [form] = Form.useForm()

    useEffect(() => {
        form.resetFields(["name", "url", "description"])
    })

    //  处理表单提交
    const onFinish = (values: any) => {
        const {name, url, description} = values
        const resource: Resource = {name, url, description}

        props.beforeSubmit?.(values)

        if (props.mode === "create") {
            createResource(resource)
        } else {
            resource.id = props.resource?.id
            editResource(resource)
        }

        props.afterSubmit?.(values, form)
    }

    //  创建资源
    const createResource = async (resource: Resource) => {
        const response = await create(resource)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("创建成功")
        }
    }

    //  编辑资源
    const editResource = async (resource: Resource) => {
        const response = await edit(resource)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("编辑成功")
        }
    }

    return (
        <Form
            ref={ref}
            form={form}
            initialValues={props.resource}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
        >
            <Form.Item
                label="名称"
                name="name"
                rules={[{required: true, message: "请输入资源名称"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="URL"
                name="url"
                rules={[{required: true, message: "请输入资源URL"}]}
                tooltip={{
                    title: "支持 Ant 路径匹配规则",
                    placement: "right"
                }}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="描述"
                name="description"
            >
                <Input.TextArea rows={3} allowClear/>
            </Form.Item>
        </Form>
    )
}

export default RoleForm
