import React from 'react'
import './MovieInfo.scss'

const MovieInfo = (props) => {
    return (
        <div className="movieInfo-container">
            <div className="back" onClick={props.closeMovieInfo} >
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft:10}}>Go Back</span>
            </div>

            <div className="info-container">
                { props.currentMovie.poster_path == null ? <img src={"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg"} alt="card-image" style={{width: "100%" , height:360}} /> : <img src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`} alt="" style={{width:"100%", height:360}} /> }
                <div className="infopart-container">
                <p> <strong>Movie Name:</strong> {props.currentMovie.title}</p>
                <p> <strong>Release Date:</strong> {props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0,4)).join("/") }</p>
                <p> <strong>Desc:</strong> {props.currentMovie.overview}</p>
                
            </div>
            </div>
           
        </div>
    )
}

export default MovieInfo
