
import Card from "./Card";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";

const CardsList = ({list, onSearchChanges, searchPlaceHolder}) => {
    return (
        <div>
            <SearchBox 
                id="search-robots"
                className="search-box"
                onChange={onSearchChanges}
                placeHolder={searchPlaceHolder}
            />
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