import { useRouter } from "next/router";
import Header from "../components/molecules/Header";
import UserProfile from "../components/templates/UserProfile";
import { useUsersQuery } from "../redux/api";


export default function UserProfileProvider() {

    /* ---------------------------------- Hooks --------------------------------- */

    const router = useRouter();
    const {id} = router.query;
    const {data: users, error: usersError, isLoading: usersIsLoading} = useUsersQuery();



    /* ------------------------------- Checking Slug ------------------------------- */

    if(!id) {
        return <Header text="404 - Not Found"/>;
    }



    /* ---------------------------- Checking Users List ---------------------------- */
    
    if(!users || usersIsLoading || usersError) {
        return <Header text="loading..."/>;
    }



    /* ----------------------------- Checking User Object ---------------------------- */

    const user = users.find(x =>  x.id.toString() === id.toString());

    if(!user){
        return <Header text="User Not Found"/>;
    }



    /* ------------------------------ Setting Props ----------------------------- */

    const props = {
        image: user.imageAddress,
        name: user.name,
        description: user.email
    };

    

    /* --------------------------------- Render --------------------------------- */

    return <UserProfile {...props}/>;
}