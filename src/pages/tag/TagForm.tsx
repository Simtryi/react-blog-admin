import React, {useEffect} from "react";
import {Form, FormInstance, Input, message} from "antd";
import Tag from "../../models/Tag";
import {create, edit} from "../../services/tag";

interface IProps {
    tag?: Tag //  标签
    mode?: string   //  表单模式, create: 创建，edit: 编辑
    refresh?: () => void    //  刷新表格数据回调函数
    beforeSubmit?: (values: any) => void    //  表单提交前回调函数
    afterSubmit?: (values: any, form: FormInstance<any>) => void    //  表单提交后回调函数
}

/**
 * 标签表单
 */
const TagForm = (props: React.PropsWithChildren<IProps>, ref?: React.ForwardedRef<FormInstance>) => {
    const [form] = Form.useForm()

    useEffect(() => {
        form.resetFields(["name", "color", "description"])
    })

    //  处理表单提交
    const handleFinish = (values: any) => {
        const {name, color, description} = values
        const tag: Tag = {name, color, description}

        props.beforeSubmit?.(values)

        if (props.mode === "create") {
            createTag(tag)
        } else {
            tag.id = props.tag?.id
            editTag(tag)
        }

        props.afterSubmit?.(values, form)
    }

    //  创建标签
    const createTag = async (tag: Tag) => {
        const response = await create(tag)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("创建成功")
        }
    }

    //  编辑标签
    const editTag = async (tag: Tag) => {
        const response = await edit(tag)
        if (response.code === "OK") {
            props.refresh?.()
            message.success("编辑成功")
        }
    }

    return (
        <Form
            ref={ref}
            form={form}
            initialValues={props.tag}
            layout="vertical"
            requiredMark={false}
            onFinish={handleFinish}
        >
            <Form.Item
                label="名称"
                name="name"
                rules={[{required: true, message: "请输入标签名称"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="颜色"
                name="color"
                rules={[{required: true, message: "请输入标签颜色"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="描述"
                name="description"
            >
                <Input.TextArea rows={3} allowClear />
            </Form.Item>
        </Form>
    )
}

export default TagForm
