import {FC, Suspense} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Spin} from "antd";
import Route from "./route/index";

const App: FC = () => {
    return (
        <Suspense fallback={<Spin size="large"/>}>
            <Router>
                <Route/>
            </Router>
        </Suspense>
    )
}

export default App;
