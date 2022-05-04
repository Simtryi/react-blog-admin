import {FormInstance, Modal, ModalProps} from "antd";
import React, {forwardRef, PropsWithoutRef, useCallback, useImperativeHandle, useRef, useState} from "react";
import "./index.less";
import Icons, {IconType} from "../../components/Icons";

/**
 * 对话框引用类型
 */
type ModalRefType<T> = {
    open: (initProp?: Partial<T>) => void   //  打开对话框
    close: () => void                       //  关闭对话框
    setModalTitle: (title: string) => void  //  设置对话框标题
} | undefined

/**
 * 表单对话框钩子
 */
const useFormModal = function <T>(modalProps: Partial<ModalProps>, Slot: React.ComponentType<T>) {
    //  对话框引用
    const modalRef = useRef<ModalRefType<T>>();

    //  表单对话框，forwardRef 创建 Modal 组件，并将其接受的 modalRef 属性转发到其组件树下的另一个组件中
    const FormModal = forwardRef<ModalRefType<T>, T>((slotProps, mRef) => {
        const [visible, setVisible] = useState(false)
        const [loading, setLoading] = useState(false)
        const [title, setTitle] = useState("")
        const [slotInitProp, setSlotInitProp] = useState<Partial<T>>()

        //  表单引用
        const formRef = React.useRef<FormInstance>()

        //  打开对话框
        const open = (initProp?: Partial<T>) => {
            if (initProp) {
                setSlotInitProp(initProp)
            }
            setVisible(true)
        }

        //  关闭对话框
        const close = () => {
            setVisible(false)
        }

        //  设置对话框标题
        const setModalTitle = (title: string) => {
            setTitle(title)
        }

        //  useImperativeHandle 将 open 方法和 close 方法挂载到 modalRef 上
        useImperativeHandle(mRef, () => ({open, close, setModalTitle}));

        //  点击确定回调
        const onOk = () => {
            //  提交表单，与点击 submit 按钮效果相同
            formRef.current?.submit()
        }

        //  点击遮罩层或右上角叉或取消按钮的回调
        const onCancel = () => {
            close()
        }

        return (
            <Modal
                className="form-modal"
                visible={visible}
                confirmLoading={loading}
                title={title}
                closeIcon={<Icons type={IconType.CLOSE}/>}
                cancelButtonProps={{type: "link"}}
                onOk={onOk}
                onCancel={onCancel}
                {...modalProps}
            >
                <Slot
                    ref={formRef}
                    beforeSubmit={() => setLoading(true)}
                    afterSubmit={() => {
                        setLoading(false)
                        close()
                    }}
                    {...slotInitProp}
                    {...slotProps}
                />
            </Modal>
        )
    })

    return {
        modalRef,
        FormModal: useCallback((props: PropsWithoutRef<T>) => {
            return <FormModal ref={modalRef} {...props} />
            // eslint-disable-next-line
        }, [])
    }
}

export default useFormModal
