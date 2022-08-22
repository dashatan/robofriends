export interface HeaderProps {
    text: string
}

export default function Header(props: HeaderProps) {
    return (
        <header className="header">
            <h2>{props.text}</h2>
        </header>
    );
}