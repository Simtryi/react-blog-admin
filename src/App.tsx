import {FC} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Container from "./pages/container";
import Login from "./pages/login";
import Results from "./components/Results";
import ResultType from "./common/enums/ResultType";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/401" element={<Results type={ResultType.UNAUTHORIZED}/>} />
                <Route path="/403" element={<Results type={ResultType.FORBIDDEN}/>} />
                <Route path="/404" element={<Results type={ResultType.NOT_FOUND}/>} />
                <Route path="/500" element={<Results type={ResultType.UNKNOWN}/>} />
                <Route path="/bug/fixing" element={<Results type={ResultType.BUG_FIXING}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
