import React from 'react'
import './Movie.scss'

const Movie = (props) => {
    return (
        <div className="movie-container">
            <div className="image-container">{
                props.image == null ? <img src={"https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"} alt=""/> : <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt=""/>
            }
            </div>
            <div className="movie-info">
                <h2><a href="#" onClick={ () => props.viewMovieInfo(props.movieId)}>View Details</a></h2>
                </div>
            
        </div>
    )
}

export default Movie
