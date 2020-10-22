import React from 'react';
import "./homePage.scss";
import SearchForm from "./SearchForm";

const HomePage = () => {
    return (
        <div className="home-page" >

            <div className="slogan"><h1>Home Page</h1></div>

            <SearchForm />
        </div>
    )
}

export default HomePage;