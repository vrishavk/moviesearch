import React from 'react'
import Movie from "./Movie";
import './MovieList.css'


const MovieList = (props) => {
    return (
        <div className="list">
            {
                props.movies.map((movie, i ) => {
                    return(
                        <Movie key ={i} viewMovieInfo ={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} />
                    )
                })
            }
        </div>
    )
}

export default MovieList;


