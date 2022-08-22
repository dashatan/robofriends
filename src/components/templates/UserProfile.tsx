import Image from "next/image";
import Header from "../molecules/Header";

export interface UserProfileProps  {
    image:string,
    name:string,
    description:string
}

export default function UserProfile(props: UserProfileProps) {
    
    return (
        <>
            <Header text="User Profile" />
            <div className="card-page">
                <div className="image-section">
                    <Image src={props.image} alt={props.name} width="200" height="200"  />
                </div>
                <div className="content-section">
                    <h2>{props.name }</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
}