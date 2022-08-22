import Image from "next/image";

export interface CardProps  {
    image: string,
    title: string,
    description: string,
    onCardClick: () => void
}

export default function Card (props: CardProps) {
    return (
        <div className="card" onClick={props.onCardClick}>
            <Image src={props.image} alt={props.title} width="200" height="200" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};
