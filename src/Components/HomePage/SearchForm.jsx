import React from 'react';
import "./homePage.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import MenuIcon from '@material-ui/icons/Menu';

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

export default function SearchForm() {
    const classes = useStyles();

    return (
        <div className="search-form" id="search-form" >
            <Paper component="form" className={classes.root}>
                {/* <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
            </IconButton> */}
                <InputBase
                    className={classes.input}
                    placeholder="Search For Movie ..."
                />
                <IconButton type="button" className={classes.iconButton} aria-label="search">
                    <SearchIcon className={classes.searchIcon} />
                </IconButton>

            </Paper>
        </div>
    );
}



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