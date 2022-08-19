import Image from "next/image";

type CardProps = {
    imageAddress: string,
    name:string,
    email:string
}

const Card = ({imageAddress, name, email}: CardProps) => {
    return (
        <div className="card">
            <Image src={imageAddress} alt={name} width="200" height="200" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;