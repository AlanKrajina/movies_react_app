import React, { Component } from "react";
import SearchedMovieCard from "./SearchedMovieCard";
import Example from "./Hook";

class MovieCard extends Component {
   
  state = {
    reviews: this.props.review,
    likes: 0
  }

   handleLikeClick = () => {
    this.setState({
        likes: this.state.likes + 1
    })
  }

  handleDislikeClick = () => {
    this.setState({
        likes: this.state.likes - 1
    })
  } 

  render() {

    return (                
      <div>
        <img
            src={this.state.reviews.multimedia.src}
            alt={this.state.reviews.reviewdisplay_title}
        />
        <h3>Title</h3>
        <p>{this.state.reviews.display_title}</p>
        <h4>Headline</h4>
        <p>{this.state.reviews.headline}</p>
        <h4>Summary</h4>
        <p>{this.state.reviews.summary_short}</p>
        <button onClick={this.handleLikeClick}>Add like</button>
        <button onClick={this.handleDislikeClick}>Add dislike</button>
        <p>Likes: {this.state.likes}</p>
        <SearchedMovieCard reviews={this.state.reviews} />
        <Example />
      </div>
    )
  }
}

export default MovieCard;   

/* 
import React from "react";

const MovieCard = ({review,handleDislikeClick,handleLikeClick,likes}) => {

	  return (                
      <div>
        <img
            src={review.multimedia.src}
            alt={review.display_title}

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

export default MovieCard;  */