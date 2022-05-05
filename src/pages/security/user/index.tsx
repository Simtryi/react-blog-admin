import React, {FC, useRef} from "react";
import type {ActionType, ProColumns} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {Button, Menu, message, PageHeader, Space, Tag} from "antd";
import {DeleteOutlined, EditOutlined, EllipsisOutlined, PlusCircleFilled} from "@ant-design/icons";
import User from "../../../models/User";
import UserStatus from "../../../models/enums/UserStatus";
import {del, list} from "../../../services/user";
import useFormModal from "../../../hooks/useFormModal/useFormModal";
import UserForm from "./UserForm";
import ConfirmModal, {ConfirmModalType} from "../../../components/ConfirmModal";
import {ItemType} from "antd/es/menu/hooks/useItems";
import HeaderDropdown from "../../../layouts/LayoutHeader/HeaderDropdown";
import {MenuInfo} from "rc-menu/lib/interface";
import "../../../assets/less/list.less";

/**
 * 用户列表页面
 */
const UserList: FC = () => {
    const actionRef = useRef<ActionType>()
    const {modalRef, FormModal: UserModal} = useFormModal({}, React.forwardRef(UserForm))

    //  列定义
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
            width: 30,
            align: "right",
            render: (text, record, _) => [
                <Button
                    key="edit"
                    type="link"
                    className="btn-edit"
                    icon={<EditOutlined/>}
                    onClick={() => {
                        modalRef.current?.open({mode: "edit", user: record, refresh})
                        modalRef.current?.setModalTitle("编辑用户")
                    }}
                />,
                <Button
                    key="delete"
                    type="link"
                    className="btn-delete"
                    icon={<DeleteOutlined/>}
                    onClick={() => deleteModal(record.id)}
                />,
                <HeaderDropdown
                    key="more"
                    overlay={<Menu items={items} onClick={(e) => handleMenuClick(e, record)}/>}
                    placement="bottomRight"
                    trigger={["click"]}
                >
                    <Button
                        type="link"
                        className="btn-more"
                        icon={<EllipsisOutlined />}
                    />
                </HeaderDropdown>
            ]
        }
    ]

    //  更多操作菜单元素
    const items: ItemType[] = [{
        label: "编辑",
        key: "edit",
        icon: <EditOutlined/>
    }, {
        label: "删除",
        key: "delete",
        icon: <DeleteOutlined/>
    }]

    //  处理菜单点击事件
    const handleMenuClick = (e: MenuInfo, record: User) => {
        const {key} = e
        if (key === "edit") {
            modalRef.current?.open({mode: "edit", user: record, refresh})
            modalRef.current?.setModalTitle("编辑用户")
        } else if (key === "delete") {
            deleteModal(record.id)
        }
    }

    //  打开删除用户对话框
    const deleteModal = (id: any) => {
        if (!id) {
            message.warning("删除时Id必填")
            return
        }

        ConfirmModal.confirm(
            ConfirmModalType.WARNING,
            <div>删除1个用户?</div>,
            <div>
                <p>以下用户将被永久删除，对管理系统的访问权限将被移除：</p>
                <p>您无法恢复删除的用户。</p>
            </div>,
            "删除用户",
            async (close: any) => {
                await del(id)
                //  刷新表格数据
                refresh()
                //  关闭对话框
                close()
            }
        )
    }

    //  请求用户列表
    const request = async (params: {current?: number; pageSize?: number; keyword?: string}) => {
        const response = await list(params.current, params.pageSize, params.keyword)
        return {
            data: response.data.data,
            success: true,
            total: response.data.total
        }
    }

    //  刷新表格数据
    const refresh = () => {
        actionRef.current?.reload()
    }

    return (
        <div className="list-page">
            <PageHeader
                title="用户"
                extra={[
                    <Button
                        key={1}
                        type="ghost"
                        icon={<PlusCircleFilled/>}
                        onClick={() => {
                            modalRef.current?.open({mode: "create", refresh})
                            modalRef.current?.setModalTitle("创建用户")
                        }}
                    >
                        创建用户
                    </Button>
                ]}
            />

            <ProTable<User>
                actionRef={actionRef}
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

            <UserModal/>
        </div>
    )
}

export default UserList
