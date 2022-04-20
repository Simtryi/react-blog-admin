import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Breadcrumb, Button} from "antd";

interface IProps {
    breadcrumbs: any[]
}

/**
 * 面包屑
 */
const Breadcrumbs: FC<IProps> = (props: IProps) => {
    const navigate = useNavigate()

    return (
        <Breadcrumb>
            {
                props.breadcrumbs.map((breadcrumb: Record<string, any>, index: number) => {
                    return (
                        <Breadcrumb.Item>
                            <Button
                                type="link"
                                disabled={index === props.breadcrumbs.length - 1}
                                onClick={() => navigate(breadcrumb.match.path)}
                            >
                                {breadcrumb.name}
                            </Button>
                        </Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    )
}

export default Breadcrumbs
