import {FC} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./view/login";
import Container from "./view/container";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Container/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
