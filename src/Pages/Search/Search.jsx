import React, { useState, useEffect } from 'react'
import "./Search.scss";
import { ReactComponent as SearchIcon } from './Search.svg';
import CardsContainer from "../../Components/CardsContainer/CardsContainer"




const Search = ({ api_key }) => {

    const [searchedItems, setSearchedItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchType, setSearchType] = useState("multi");
    const [page, setPage] = useState(1);


    window.addEventListener('scroll', () => {
        if ((window.scrollY + window.innerHeight) === document.documentElement.scrollHeight) {
            setPage(page + 1)

        }


    })

    const inputHandler = (e) => {
        setSearchText(e.target.value);
    }

    const changeHandler = (e) => {
        setSearchType(e.target.value)
        console.log(e.target.value)
        setPage(1)
    }


    const searchItems = (e) => {
        fetch(`https://api.themoviedb.org/3/search/${searchType}?api_key=${api_key}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchedItems(data.results);
                setPage(1);
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
        <div className="search-page mt-70" >
            <div className="container">
                <div className="search-form">

                    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="search-input" id="search-input" onChange={inputHandler} value={searchText} placeholder='Search by name ...'/>
                        <button onClick={searchItems} type="submit"><SearchIcon className='icon' /></button>
                    </form>


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
                        <div className="searched-container" onScroll={(e) => console.log(e.currentTarget.scrollTop)}>
                            <CardsContainer
                                items={searchedItems}
                            />
                            <button className="load-more" onClick={() => setPage(page + 1)}></button>

                        </div>
                        : ""
                }

            </div>
        </div>
    )
}

export default Search;