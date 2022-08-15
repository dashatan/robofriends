import CardsList from "./components/CardsList";
import "./App.css";
import { search } from "./redux/searchSlice";
import { useUsersQuery } from "./redux/api";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
    const searchTerm = useAppSelector((state: {search:{text:string}}) => state.search.text);
    const dispatch = useAppDispatch();
    const {data: users, error: usersError, isLoading: usersIsLoading} = useUsersQuery(1);

    //view that will be showed while users have been fetching from API
    if ( usersIsLoading || !users || usersError ) {
        return <div className="app"><header title="header"><h2>loading</h2></header></div>;
    }
    //Filter list by searched text
    let list = users.filter(x=> x.name.toLowerCase().includes(searchTerm.toLowerCase()));

    //Add test image property to items from robohash.org
    list = list.map((item: { id: number; })=>({...item, imageAddress:`https://robohash.org/${item.id+3}?size=200x200`})); 
    
    return (
        <div className="app">
            <header title="header">
                <h2>Robots Will Be Friends</h2>
            </header>
            <CardsList 
                list={list}
                onSearchChanges={(e: {target: {value: string}}) => dispatch(search(e.target.value))} 
                searchPlaceHolder="search in robots"
                searchTerm= {searchTerm}
            />
        </div>
    );
}

export default App;
