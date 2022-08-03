
import { useState } from "react";
import Card from "./Card";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";

const CardsList = (props) => {
    let [list,setList] = useState(props.list);

    const onSearchTermChange = (e)=>{
        let newList = props.list.filter(x=> x.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setList(newList);
    };
    
    return (
        <div>
            <SearchBox onChange={onSearchTermChange} />
            <Scroll>
                <div className="cards-container">
                    {list.map((val)=>{
                        return <Card key={val.id} imageAddress={`https://robohash.org/${val.name}`} {...val} />;
                    })}
                </div>
            </Scroll>
        </div>
    );
};

export default CardsList;