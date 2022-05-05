import React, {FC, useRef} from "react";
import type {ActionType, ProColumns} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {Button, Menu, message, PageHeader, Space} from "antd";
import {DeleteOutlined, EditOutlined, EllipsisOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {MenuInfo} from "rc-menu/lib/interface";
import Resource from "../../../models/Resource";
import ResourceForm from "./ResourceForm";
import useFormModal from "../../../hooks/useFormModal/useFormModal";
import HeaderDropdown from "../../../layouts/LayoutHeader/HeaderDropdown";
import ConfirmModal, {ConfirmModalType} from "../../../components/ConfirmModal";
import {del, list} from "../../../services/resource";
import "../../../assets/less/list.less";

/**
 * 资源列表页面
 */
const RoleList: FC = () => {
    const actionRef = useRef<ActionType>()
    const {modalRef, FormModal: ResourceModal} = useFormModal({}, React.forwardRef(ResourceForm))

    //  列定义
    const columns: ProColumns<Resource>[] = [
        {
            title: '名称',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.length - b.name.length,
                multiple: 1,
            }
        },
        {
            title: "URL",
            dataIndex: "url",
            sorter: {
                compare: (a, b) => a.url.length - b.url.length
            }
        },
        {
            title: '描述',
            dataIndex: 'description'
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
                        modalRef.current?.open({mode: "edit", resource: record, refresh})
                        modalRef.current?.setModalTitle("编辑资源")
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
    const handleMenuClick = (e: MenuInfo, record: Resource) => {
        const {key} = e
        if (key === "edit") {
            modalRef.current?.open({mode: "edit", resource: record, refresh})
            modalRef.current?.setModalTitle("编辑资源")
        } else if (key === "delete") {
            deleteModal(record.id)
        }
    }

    //  打开删除资源对话框
    const deleteModal = (id: any) => {
        if (!id) {
            message.warning("删除时Id必填")
            return
        }

        ConfirmModal.confirm(
            ConfirmModalType.WARNING,
            <div>删除资源</div>,
            <div>
                <p>是否确定删除此资源？</p>
                <p>此操作无法撤消！</p>
            </div>,
            "删除资源",
            async (close: any) => {
                await del(id)
                //  刷新表格数据
                refresh()
                //  关闭对话框
                close()
            }
        )
    }

    //  请求资源列表
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
                title="资源"
                extra={[
                    <Button
                        key={1}
                        type="ghost"
                        icon={<PlusCircleOutlined/>}
                        onClick={() => {
                            modalRef.current?.open({mode: "create", refresh})
                            modalRef.current?.setModalTitle("创建资源")
                        }}
                    >
                        创建资源
                    </Button>
                ]}
            />

            <ProTable<Resource>
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

            <ResourceModal/>
        </div>
    )
}

export default RoleList
