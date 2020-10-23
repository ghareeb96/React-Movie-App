import React from 'react';
import "./homePage.scss";
import SearchForm from "./SearchForm";
import { Button } from "@material-ui/core";

const HomePage = (props) => {
    return (
        <div className="home-page" >

            <div className="slogan">
                <div>
                    <h3>Search Your Favourite Movie</h3>
                    <h3>Make your own Watchlist</h3>
                </div>
                <div className="btn">
                    <Button
                        className="start-btn"
                        size="large"
                        variant="contained"
                        href="#search-form"
                    >Start Now
                </Button>
                </div>

            </div>

            <SearchForm />
        </div>
    )
}

export default HomePage;