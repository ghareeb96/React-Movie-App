import React, { useState, useEffect } from 'react'
import "./Search.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoviesContainer from "../MoviesContainer/MoviesContainer"

const api_key = "137436a3a883e2b94597a24e32d9d6b8";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0.6rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        width: "100%"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: "2rem"
    },
    iconButton: {
        padding: 10,
    },
    searchIcon: {
        fontSize: "2rem"
    }

}));


const Search = () => {

    const [searchedItems, setSearchedItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const classes = useStyles();


    const inputHandler = (e) => {
        setSearchText(e.target.value);
    }

    const searchItems = () => {

        // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}`)
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchedItems(data.results);
                setPage(1);
            })
    }

    useEffect(() => {
        const search = () => {
            // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}`)
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${searchText}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    setSearchedItems(oldArray => oldArray.concat(data.results));
                })
            window.initialScrollTop = 0;
            console.log(window)
        }
        if (page !== 1) {
            search();
        }

    }, [page])

    return (
        <div className="search" >
            <div className="search-form">
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search for Anything ..."
                        value={searchText}
                        onChange={inputHandler}
                        autoFocus={true}
                    />
                    <IconButton
                        type="submit"
                        className={classes.iconButton}
                        aria-label="search"
                        onClick={(e) => {
                            e.preventDefault()
                            searchItems(searchText)
                        }}
                    >
                        <SearchIcon
                            className={classes.searchIcon}
                        />
                    </IconButton>
                </Paper>
            </div>

            <div className="container">
                <div className="items-container">
                    <MoviesContainer movies={searchedItems}
                        type="movie" />
                </div>
                <div className="more">
                    <a href="#movie" onClick={() => setPage(page + 1)}>Load More</a>
                </div>
            </div>
        </div>
    )
}

export default Search;