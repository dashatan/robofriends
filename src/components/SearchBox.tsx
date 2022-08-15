type SearchBoxProps = {
    id: string,
    className: string,
    placeHolder: string,
    searchTerm: string,
    onChange: ()=>{},
}
const SearchBox = ({id, className, placeHolder, searchTerm, onChange}: SearchBoxProps) => {
    return (
        <div className="search-container">
            <input 
                type="search" 
                id={id || "search"} 
                className={className || "search"}
                placeholder={placeHolder || "search"}
                value={searchTerm}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBox;