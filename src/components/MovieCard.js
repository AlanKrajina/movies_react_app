import React, { Component } from "react";

class MovieCard extends Component {

      state = {
        likes: 0,
        review: this.props.review
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
            src={this.state.review.multimedia.src}
            alt={this.state.review.display_title}

            // slozit tako da kada klikne na film da on apsolute se pokaze na sredini
        />
        <h3>Title</h3>
        <p>{this.state.review.display_title}</p>
        <h4>Headline</h4>
        <p>{this.state.review.headline}</p>
        <h4>Summary</h4>
        <p>{this.state.review.summary_short}</p>
        <button onClick={this.handleLikeClick}>Add like</button>
        <button onClick={this.handleDislikeClick}>Add dislike</button>

        <p>Likes: {this.state.likes}</p>
      </div>
    );
  }
}


export default MovieCard;



