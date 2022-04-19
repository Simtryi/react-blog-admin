import {FC} from 'react';
import {Button} from "antd";
import {useAppDispatch} from "./hooks/reduxHook";
import User from "./model/user";
import {setUser} from "./store/reducer/userSlice";

const App: FC = () => {
    const dispatch = useAppDispatch()

    const user1: User = {
        username: "白展堂",
        password: "123",
        permission: []
    }

    return (
        <div className="App">
            <Button type="primary" onClick={() => {dispatch(setUser(user1))}}>hello world</Button>
        </div>
    );
}

export default App;
