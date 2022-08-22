import { useRouter } from "next/router";
import Header from "../components/molecules/Header";
import Home, { HomePageProps } from "../components/templates/Home";
import { useUsersQuery } from "../redux/api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { search } from "../redux/searchSlice";
import { Card } from "../redux/types/Card";
import { User } from "../redux/types/User";

export default function HomeProvider() {

    /* ---------------------------------- Hooks --------------------------------- */

    const router = useRouter();
    const dispatch = useAppDispatch();
    const {data: users, error: usersError, isLoading: usersIsLoading} = useUsersQuery();
    const searchTerm = useAppSelector((state: {search:{text:string}}) => state.search.text);


    
    /* -------------------------------- Functions ------------------------------- */

    const onCardClick = (item: User) => router.push("/cards/"+item.id);
    const onSearchChange = (val: string) => dispatch(search(val));



    /* --------------------------------- Loading -------------------------------- */

    if ( usersIsLoading || !users || usersError ) {
        return <div className="app"><Header text="loading..."/></div>;
    }



    /* ----------------------------- Normalize List ----------------------------- */

    const NormalizedCardsList = () => {
        let newData: Card[] = [];
        users.forEach( (user) => {
            const newUser = {
                id: user.id,
                image: user.imageAddress,
                title: user.name,
                description: user.email
            };
            newData.push(newUser);
        });
        return newData;
    };



    /* --------------------------------- Search --------------------------------- */

    let filteredList = NormalizedCardsList().filter(x=> x.title.toLowerCase().includes(searchTerm.toLowerCase()));

   

    /* ------------------------------ Setting Props ----------------------------- */

    const props: HomePageProps = {
        list: filteredList,
        headerText: "Robots are friends",
        searchPlaceHolder: "search in robots",
        searchTerm,
        onSearchChange,
        onCardClick
    };

    

    /* --------------------------------- Render --------------------------------- */

    return <Home {...props} />;

}