import React from "react";

const MovieCard = ({review,handleDislikeClick,handleLikeClick,likes}) => {

	  return (                
      <div>
        <img
            src={review.multimedia.src}
            alt={review.display_title}

            // slozit tako da kada klikne na film da on apsolute se pokaze na sredini
        />
        <h3>Title</h3>
        <p>{review.display_title}</p>
        <h4>Headline</h4>
        <p>{review.headline}</p>
        <h4>Summary</h4>
        <p>{review.summary_short}</p>
        <button onClick={handleLikeClick}>Add like</button>
        <button onClick={handleDislikeClick}>Add dislike</button>

        <p>Likes: {likes}</p>
      </div>
	)
}

export default MovieCard; 







