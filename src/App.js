
import {useDispatch, useSelector} from "react-redux";
import CardsList from "./components/CardsList";
import "./App.css";
import { search } from "./redux/searchSlice";
import {  useUsersQuery } from "./redux/api";

function App() {
    const searchTerm = useSelector((state) => state.search.text);
    const dispatch = useDispatch();
    const {data: users, error: usersError, isLoading: usersIsLoading} = useUsersQuery();

    //view that will be showed while users have been fetching from API
    if ( usersIsLoading || !users || usersError) {
        return <div className="app"><header><h2>loading</h2></header></div>;
    }

    //Filter list by searched text
    let list = users.filter(x=> x.name.toLowerCase().includes(searchTerm.toLowerCase()));

    //Add test image property to items from robohash.org
    list = list.map((item)=>({...item, imageAddress:`https://robohash.org/${item.name}`})); 
    
    return (
        <div className="app">
            <header>
                <h2>ROBOFRIENDS</h2>
            </header>
            <CardsList list={list} onSearchChanges={e => dispatch(search(e.target.value))} />
        </div>
    );
}

export default App;
