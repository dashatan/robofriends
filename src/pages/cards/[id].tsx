import { Provider } from "react-redux";
import UserProfileProvider from "../../providers/UserProfileProvider";
import { store } from "../../redux/store";

export default function CardPage() {
    return (
        <Provider store={store}>
            <UserProfileProvider />
        </Provider>
    );
}