import {FC} from "react";
import {createFromIconfontCN} from "@ant-design/icons";
import IconType from "../../common/enums/IconType";

interface IProps {
    type: IconType    //  图标类型
}

/**
 * 图标
 */
const Icon: FC<IProps> = (props: IProps) => {
    const IconFont = createFromIconfontCN({
        scriptUrl: "//at.alicdn.com/t/font_3346939_5qa3mmzpi6s.js"
    })

    return <IconFont type={props.type}/>
}

export default Icon
