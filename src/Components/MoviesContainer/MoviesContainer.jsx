import React from 'react'
import "./MoviesContainer.scss";
import Movie from "./Movie/Movie"


const MoviesContainer = (props) => {

    return (
        <div className="movies-container">
            {props.movies.filter(item => item.poster_path).map((item) => (
                <Movie
                    poster={item.poster_path}
                    key={item.id}
                />
            ))}

        </div>
    )
}

export default MoviesContainer;