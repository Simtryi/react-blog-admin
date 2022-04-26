import {FC} from "react";
import {Layout} from "antd";
import LayoutHeader from "../../component/LayoutHeader";
import LayoutNavigation from "../../component/LayoutNavigation";
import Account from "../account";
import "./index.less";

/**
 * 布局页面
 */
const Container: FC = () => {
    return (
         <Layout className="container">
            <LayoutHeader/>
            <LayoutNavigation/>
             <Layout.Content>
                 <Account/>
             </Layout.Content>
         </Layout>
    )
}

export default Container
