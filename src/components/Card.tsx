type CardProps = {
    imageAddress: string,
    name:string,
    email:string
}

const Card = ({imageAddress, name, email}: CardProps) => {
    return (
        <div className="card">
            <img src={imageAddress} alt={name}  />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;