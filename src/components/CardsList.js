
import Card from "./Card";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";

const CardsList = (props) => {
    const {list, onSearchChanges} = props;
    return (
        <div>
            <SearchBox onChange={onSearchChanges} />
            <Scroll>
                <div className="cards-container">
                    {list.map( item => {
                        return  <Card key={item.id} {...item} /> ;
                    })}
                </div>
            </Scroll>
        </div>
    );
};

export default CardsList;