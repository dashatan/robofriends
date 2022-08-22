export interface SearchBoxProps {
    id: string,
    className: string,
    placeHolder: string,
    searchTerm: string,
    onChange: () => void,
}

export default function SearchBox (props: SearchBoxProps) {
    return (
        <div className="search-container">
            <input 
                type="search" 
                id={props.id || "search"} 
                className={props.className || "search"}
                placeholder={props.placeHolder || "search"}
                value={props.searchTerm}
                onChange={props.onChange}
            />
        </div>
    );
};
