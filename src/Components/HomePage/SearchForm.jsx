import React from 'react';
import "./homePage.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import MenuIcon from '@material-ui/icons/Menu';

let api_key = "137436a3a883e2b94597a24e32d9d6b8";

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

const SearchForm = (props) => {
    const classes = useStyles();

    const inputHandler = (e) => {
        props.setSearchText(e.target.value);
        // console.log()
    }

    const searchMovies = (searchText) => {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className="search-form" id="search-form" >
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search For Movie ..."
                    value={props.searchText}
                    onChange={inputHandler}
                />
                <IconButton
                    type="button"
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={() => searchMovies(props.searchText)}
                >
                    <SearchIcon
                        className={classes.searchIcon}
                    />
                </IconButton>

            </Paper>
        </div>
    );
}
export default SearchForm;


// const SearchForm = () => {
//     return (
//         <div className="search-form" id="search-form" >
//             <div className="search-bar">
//                 <label htmlFor="search-input" className="search-label">Search</label>
//                 <input type="text" name="search-input" id="search-input" placeholder="Search your Movie ..." />
//             </div></div>
//     )
// }

// export default SearchForm;