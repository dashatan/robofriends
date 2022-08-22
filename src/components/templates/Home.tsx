import { Card } from "../../redux/types/Card";
import Header from "../molecules/Header";
import CardsList from "../organisms/CardsList";

export interface HomePageProps {
    list: Card[],
    headerText: string,
    searchPlaceHolder: string,
    searchTerm: string,
    onSearchChange: (val: string) => void ,
    onCardClick: (item: any) => void

}

export default function Home(props: HomePageProps) {
    
    return (
        <div className="app">
            <Header text={props.headerText}/>
            <CardsList 
                list={props.list}
                onSearchChanges={(e: { target: { value: any; }; }) => props.onSearchChange(e.target.value)} 
                searchPlaceHolder={props.searchPlaceHolder}
                searchTerm= {props.searchTerm}
                onCardClick={((item: any)=>props.onCardClick(item))}
            />
        </div>
    );
}