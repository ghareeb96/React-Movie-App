import React from 'react';
import "./homePage.scss";


const SearchForm = () => {
    return (
        <div className="search-form" >
            <label htmlFor="search-input" className="search-label">Search</label>
            <input type="text" name="search-input" id="search-input" placeholder="Search your Movie ..." />
        </div>
    )
}

export default SearchForm;