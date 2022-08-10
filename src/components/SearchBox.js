const SearchBox = (props)=>{
    return (
        <div className="search-container">
            <input type="search" name="search" id="search" placeholder="Search in users" value={props.searchTerm} onChange={props.onChange} />
        </div>
    );
};

export default SearchBox;