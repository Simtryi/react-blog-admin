import {FC, useRef, useState} from "react";
import {AutoComplete, Input, InputRef} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import classNames from "classnames";
import "./index.less";

interface IProps {
    className?: string
    placeholder?: string
    onSearch?: (value?: string) => void
}

/**
 * 头部-搜索框
 */
const HeaderSearch: FC<IProps> = (props: IProps) => {
    const [value, setValue] = useState("")
    const [visible, setVisible] = useState(false)
    const inputRef = useRef<InputRef | null>(null);

    return (
        <div
            className={classNames("header-search", props.className)}
            onClick={() => {
                console.log("visible...")
                setVisible(true)
                if (visible && inputRef.current) {
                    inputRef.current.focus();
                }
            }}
        >
            <SearchOutlined
                key="Icon"
                style={{
                    cursor: 'pointer',
                }}
            />

            <AutoComplete
                key="AutoComplete"
                className={classNames("input", {
                    "show": visible
                })}
                value={value}
                onChange={(completeValue) => setValue(completeValue)}
            >
                <Input
                    size="small"
                    ref={inputRef}
                    placeholder={props.placeholder}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (props.onSearch) {
                                props.onSearch(value)
                            }
                        }
                    }}
                    onBlur={() => setVisible(false)}
                />
            </AutoComplete>
        </div>
    )
}

export default HeaderSearch
