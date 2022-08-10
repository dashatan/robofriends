const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imageAddress} alt={props.name}  />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
};

export default Card;