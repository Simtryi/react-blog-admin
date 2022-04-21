import {FC} from "react";
import {createFromIconfontCN} from "@ant-design/icons";

interface IProps {
    type: string    //  图标名称
}

/**
 * 图标
 */
const Icon: FC<IProps> = (props: IProps) => {
    const IconFont = createFromIconfontCN({
        scriptUrl: "//at.alicdn.com/t/font_3346939_odfop2sdtk.js"
    })

    return <IconFont type={props.type}/>
}

export default Icon
