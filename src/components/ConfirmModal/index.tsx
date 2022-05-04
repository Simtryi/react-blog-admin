import React, {ReactNode} from "react";
import {Modal, ButtonProps} from "antd";
import Icons, {IconType} from "../Icons";
import "./index.less";
import classNames from "classnames";

/**
 * 确认对话框类型
 */
export enum ConfirmModalType {
    INFO = "info",      //  信息确认对话框
    WARNING = "warning" //  警告确认对话框
}

/**
 * 确认对话框
 */
export default class ConfirmModal {

    /**
     * 打开确认对话框
     * @param type    确认对话框类型
     * @param title   标题
     * @param content 内容
     * @param okText  确认按钮文字
     * @param onOk    点击确定回调
     */
    static confirm = (type?: string, title?: ReactNode, content?: ReactNode, okText?: string, onOk?: (close: any) => void) => {
        //  按钮类型
        const btnType: ButtonProps["type"] = "link"

        //  对话框配置
        const config = {
            className: classNames("confirm-modal", {
                "confirm-modal-info": type === ConfirmModalType.INFO,
                "confirm-modal-warning": type === ConfirmModalType.WARNING
            }),
            title,
            content,
            okText,
            onOk,
            closable: true,
            closeIcon: <Icons type={IconType.CLOSE}/>,
            icon: null,
            maskClosable: true,
            cancelButtonProps: {type: btnType}
        }

        return Modal.confirm(config)
    }

}
