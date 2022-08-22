import Card from "../molecules/Card";
import Scroll from "../molecules/Scroll";
import SearchBox from "../molecules/SearchBox";

export interface CardsListProps {
    list: any[],
    onSearchChanges: any, 
    searchPlaceHolder: string,
    searchTerm: string,
    onCardClick: (item: any) => void
}

const CardsList = (props: CardsListProps) => {
    
    return (
        <div>
            <SearchBox 
                id="search-robots"
                className="search-box"
                onChange={props.onSearchChanges}
                placeHolder={props.searchPlaceHolder} 
                searchTerm={props.searchTerm}      
            />
            <Scroll>
                <div className="cards-container">
                    {props.list.map( (item) => {
                        return  (
                            <Card 
                                key={item.id} 
                                onCardClick={() => props.onCardClick(item) }
                                {...item} 
                            />
                        ) ;
                    })}
                </div>
            </Scroll>
        </div>
    );
};

export default CardsList;