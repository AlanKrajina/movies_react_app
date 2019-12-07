import React from 'react'
import MovieCard from "./MovieCard";

const ShowMovie = ({review,handleLikeClick}) => (

    <div>
            <MovieCard  review={review}/>
            <button id={review ? review.id : "no-review"} className="like-button" onClick={handleLikeClick}>Like</button>
            <button id={review ? review.id : "no-review"} className="dislike-button" onClick={handleLikeClick}>Dislike</button>
    </div>
)


export default ShowMovie;