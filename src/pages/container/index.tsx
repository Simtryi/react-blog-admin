import {FC} from "react";
import {Layout} from "antd";
import LayoutHeader from "../../layouts/LayoutHeader";
import LayoutNavigation from "../../layouts/LayoutNavigation";
import "./index.less";

/**
 * 布局页面
 */
const Container: FC = () => {
    return (
         <Layout className="container">
            <LayoutHeader/>
            <LayoutNavigation/>
            {/*<Layout.Content>*/}
            {/*</Layout.Content>*/}
         </Layout>
    )
}

export default Container
