import {FC} from "react";
import LayoutHeader from "../../component/LayoutHeader";
import LayoutNavigation from "../../component/LayoutNavigation";
import "./index.less";

/**
 * 主页
 */
const Home: FC = () => {
    return (
         <div className="home">
            <LayoutHeader/>
            <LayoutNavigation/>
         </div>
    )
}

export default Home
