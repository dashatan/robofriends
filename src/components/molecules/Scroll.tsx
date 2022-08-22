export interface ScrollProps {
    children: React.ReactNode
}

export default function Scroll (props: ScrollProps) {
    return <div className="scrollable">{props.children}</div>;
};
