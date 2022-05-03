import React, {FC} from "react";
import type {ProColumns} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {Button, FormInstance, PageHeader, Space, Tag} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import User from "../../models/User";
import UserStatus from "../../models/enums/UserStatus";
import {list} from "../../services/user";
import useFormModal from "../../hooks/useFormModal/useFormModal";
import UserForm from "./UserForm";
import "./index.less";

/**
 * 用户列表页面
 */
const UserList: FC = () => {
    const {modalRef, FormModal: UserModal} = useFormModal({}, React.forwardRef(UserForm))

    const columns: ProColumns<User>[] = [
        {
            title: '用户名',
            dataIndex: 'username',
            sorter: {
                compare: (a, b) => a.username.length - b.username.length,
                multiple: 1,
            }
        },
        {
            title: '昵称',
            dataIndex: 'nickname',
            sorter: {
                compare: (a, b) => a.nickname.length - b.nickname.length,
                multiple: 2,
            }
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            sorter: {
                compare: (a, b) => a.email.length - b.email.length,
                multiple: 3,
            }
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (_, record) => (
                record.status === UserStatus.OK ?
                    <Tag color="#108ee9" key={record.id}>正常</Tag> :
                    <Tag color="#f50" key={record.id}>禁用</Tag>
            ),
        },
        {
            title: '操作',
            valueType: 'option',
            key: 'option',
            render: (text, record, _) => [
                <Button
                    type="link"
                    key="edit"
                    onClick={() => {
                        modalRef.current?.open({mode: "edit", user: record})
                        modalRef.current?.setModalTitle("编辑用户")
                    }}
                >
                    编辑
                </Button>,
                <Button type="link" key="delete">删除</Button>
            ]
        }
    ]

    //  请求用户列表
    const request = async (params: {current?: number; pageSize?: number; keyword?: string}) => {
        const response = await list(params.current, params.pageSize, params.keyword)
        return {
            data: response.data.data,
            success: true,
            total: response.data.total
        }
    }

    //  处理表单提交之后事件
    const afterSubmit = (values: any, form: FormInstance<any>) => {

    }

    return (
        <div className="user-list">
            <PageHeader
                title="用户"
                extra={[
                    <Button
                        key={1}
                        type="ghost"
                        icon={<PlusCircleOutlined/>}
                        onClick={() => {
                            modalRef.current?.open({mode: "create"})
                            modalRef.current?.setModalTitle("创建用户")
                        }}
                    >
                        创建用户
                    </Button>
                ]}
            />

            <ProTable<User>
                request={request}
                columns={columns}
                search={false}
                options={{
                    search: true
                }}
                pagination={{
                    showSizeChanger: true
                }}
                rowKey="id"
                rowSelection={{}}
                tableAlertRender={({selectedRowKeys, selectedRows, onCleanSelected}) => (
                    <span>
                        已选 {selectedRowKeys.length} 项
                        <Button type="link" style={{marginLeft: 8}} onClick={onCleanSelected}>
                          取消选择
                        </Button>
                    </span>
                )}
                tableAlertOptionRender={() => {
                    return (
                        <Space size="small">
                            <Button type="link">
                                批量删除
                            </Button>
                            <Button type="link">
                                导出数据
                            </Button>
                        </Space>
                    );
                }}
            />

            <UserModal afterSubmit={afterSubmit}/>
        </div>
    )
}

export default UserList
