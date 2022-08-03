import CardsList from "./components/CardsList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

    let [users,setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response=> response.json())
            .then(users=> {
                setUsers(users);
            });
    }, []);

    if (!users.length) {
        return <div className="app"><header><h2>loading</h2></header></div>;
    }
    
    return (
        <div className="app">
            <header>
                <h2>ROBOFRIENDS</h2>
            </header>
            <CardsList list={users} />
        </div>
    );
}

export default App;
