import React, { useState, useEffect } from 'react'
import "./Search.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CardsContainer from "../../Components/CardsContainer/CardsContainer"
import { ExpandMore } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        width: "60%",
        minWidth: "300px",
        height: "60px",
        margin: "50px auto"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: "1.5rem"
    },
    iconButton: {
        padding: 10,
    },
    searchIcon: {
        fontSize: "2rem"
    }

}));


const Search = ({api_key}) => {

    const [searchedItems, setSearchedItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchType, setSearchType] = useState("multi");
    const [page, setPage] = useState(1);
    const classes = useStyles();


    const inputHandler = (e) => {
        setSearchText(e.target.value);
    }
    const changeHandler = (e) => {
        setSearchType(e.target.value)
        setPage(1)
    }


    const searchItems = () => {

        fetch(`https://api.themoviedb.org/3/search/${searchType}?api_key=${api_key}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchedItems(data.results);
                setPage(1);
                console.log(data.results)
            })
    }

    useEffect(() => {
        const search = () => {
            fetch(`https://api.themoviedb.org/3/search/${searchType}?api_key=${api_key}&query=${searchText}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    setSearchedItems(oldArray => oldArray.concat(data.results));
                })

        }
        if (page !== 1) {
            search();
        }

    }, [page])



    return (
        <div className="search-page" >
            <div className="search-form">
                <div className="search-bar">

                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search here ..."
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


                <div className="search-options">
                    <div className="search-type">
                        <div className="filter-headline">
                            <h6>Looking for :</h6>
                        </div>

                        <div className="radio-group" onChange={changeHandler}>
                            <label className="radio-container">All
                                <input type="radio" name="search-type" value="multi" checked={searchType === "multi"} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-container">Movies
                                <input type="radio" name="search-type" value="movie" checked={searchType === "movie"} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-container">TV
                                <input type="radio" name="search-type" value="tv" checked={searchType === "tv"} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-container">Persons
                                <input type="radio" name="search-type" value="person" checked={searchType === "person"} />
                                <span className="checkmark"></span>
                            </label>

                        </div>
                    </div>
                </div>
            </div>

            {
                searchedItems.length !== 0 ?
                    <div className="searched-container">
                        <CardsContainer
                            items={searchedItems}
                        />
                        <button className="load-more" onClick={() => setPage(page + 1)}><ExpandMore className="icon" /></button>

                    </div>
                    : ""
            }


        </div>
    )
}

export default Search;