import Card from "./Card";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";

interface Props {
    list: any[],
    onSearchChanges: any, 
    searchPlaceHolder: string,
    searchTerm: string,
}

const CardsList = ({list, onSearchChanges, searchPlaceHolder, searchTerm}: Props) => {
    return (
        <div>
            <SearchBox 
                id="search-robots"
                className="search-box"
                onChange={onSearchChanges}
                placeHolder={searchPlaceHolder} 
                searchTerm={searchTerm}      
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