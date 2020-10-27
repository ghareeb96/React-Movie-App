import React from 'react'
import "./MoviesContainer.scss";
import Movie from "./Movie/Movie"


const MoviesContainer = (props) => {

    return (
        <div className="movies-container">
            {props.movies.filter(item => item.poster_path)
                .filter(item => item.original_language !== "ja")
                .map((item) => (
                    <Movie
                        movie={item}
                        key={item.id}
                    />
                ))}

        </div>
    )
}

export default MoviesContainer;