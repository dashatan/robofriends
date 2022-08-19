import { Provider } from "react-redux";
import Home from "../containers/Home";
import { store } from "../redux/store";

export default function Index() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

