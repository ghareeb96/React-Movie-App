import React, { useEffect, useState } from 'react'
import "./TopRated.scss";
import CardsContainer from "../../Components/CardsContainer/CardsContainer"
import { ExpandMore } from '@material-ui/icons';



const TopRated = () => {
    const api_key = "137436a3a883e2b94597a24e32d9d6b8";
    const [movie_page, setMoviePage] = useState(1);
    const [tv_page, setTVPage] = useState(1);


    const [topRatedMovies, setTopRatedMovies] = useState([]);
    useEffect(() => {
        const get_top_movies = () => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${movie_page}`)
                .then(res => res.json())
                .then(data => {
                    setTopRatedMovies(oldArray => oldArray.concat(data.results));
                })
        }
        get_top_movies();
    }, [movie_page]);


    const [topRatedTV, setTopRatedTV] = useState([]);
    useEffect(() => {
        const get_top_tv = () => {
            fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${tv_page}`)
                .then(res => res.json())
                .then(data => {
                    setTopRatedTV(oldArray => oldArray.concat(data.results));
                })
        }
        get_top_tv();
    }, [tv_page]);


    return (
        <div className="top-rated" >
            <div className="section" id="movieContainer">
                <div className="headline">
                    <h3>Top Rated Movies</h3>
                </div>
                <div>
                    <CardsContainer
                        items={topRatedMovies}
                    // scroll_type="movie"
                    />
                </div>
                {/* <div className="more">
                        <a href="#movie" >Load More</a>
                    </div> */}
                <button className="load-more" onClick={() => setMoviePage(movie_page + 1)}>See More</button>
            </div>

            {/* <div className="divider"></div> */}

            <div className="section" id="tvContainer">
                <div className="headline">
                    <h3>Top Rated TV Shows</h3>
                </div>
                <div>

                    <CardsContainer
                        items={topRatedTV}
                    // scroll_type="tv"
                    />
                </div>
                <button className="load-more" onClick={() => setTVPage(tv_page + 1)}>See More</button>
                {/* <div className="load-more">
                        <a href="#tv" >Load More</a>
                    </div> */}
            </div>
        </div>

    )
}

export default TopRated;