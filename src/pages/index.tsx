import { Provider } from "react-redux";
import HomeProvider from "../providers/HomeProvider";
import { store } from "../redux/store";

export default function Index() {
    return (
        <Provider store={store}>
            <HomeProvider />
        </Provider>
    );
}

