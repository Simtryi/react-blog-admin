import {FC} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./page/login";
import Layout from "./page/layout";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
