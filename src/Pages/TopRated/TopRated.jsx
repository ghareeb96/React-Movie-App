import React, { useEffect, useState } from 'react'
import "./TopRated.scss";
import CardsContainer from "../../Components/CardsContainer/CardsContainer"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TopRated = ({ api_key }) => {

    const [activeSection, setActiveSection] = useState('movies')
    const [page, setPage] = useState(1);
    const [topRatedTV, setTopRatedTV] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);



    useEffect(() => {
        const get_top_movies = () => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    setTopRatedMovies(oldArray => oldArray.concat(data.results));
                })
        }
        get_top_movies();
    }, [page]);

    useEffect(() => {
        const get_top_tv = () => {
            fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    setTopRatedTV(oldArray => oldArray.concat(data.results));
                })
        }
        get_top_tv();
    }, [page]);

    useEffect(() => {
        ScrollTrigger.addEventListener('scrollEnd', () => {
            
            if ((window.scrollY + window.outerHeight) >= document.documentElement.scrollHeight) {
                setPage((page) => page + 1)
            }
        })
    }, [])
    
    return (
        <div className="top-rated" >
            <div className="container">

                <div className="section" id="movieContainer">
                    <div className="filter-bar">
                        <ul>
                            <li className={activeSection === 'movies' ? 'filter-item active' : 'filter-item'} ><button
                                onClick={() => {
                                    setActiveSection("movies")
                                }}>

                                Movies</button></li>

                            <li className={activeSection === 'tv' ? 'filter-item active' : 'filter-item'} ><button
                                onClick={() => {
                                    setActiveSection("tv")
                                }}>
                                
                                TV Shows</button></li>

                        </ul>
                    </div>



                    {
                        activeSection === 'movies' ?
                            <CardsContainer
                                items={topRatedMovies} />
                            :
                            <CardsContainer
                                items={topRatedTV}
                            />

                    }


                </div>
            </div>
        </div>

    )
}

export default TopRated;