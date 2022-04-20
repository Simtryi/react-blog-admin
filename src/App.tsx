import {FC} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./view/login";
import Home from "./view/home";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
