import {FC, Suspense} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Spin} from "antd";
import Route from "./route/index";

const App: FC = () => {
    const spin = (
        <Spin
            size="large"
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}
        />
    )

    return (
        <Suspense fallback={spin}>
            <Router>
                <Route/>
            </Router>
        </Suspense>
    )
}

export default App;
