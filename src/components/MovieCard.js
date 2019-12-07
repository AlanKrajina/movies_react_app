import React from 'react'

const MovieCard = ({review}) => (      
    <div>
        <h3>{review.display_title}</h3>
        <p>{review.headline}</p>
        <p>{review.summary_short}</p>
  </div>
)


export default MovieCard;
