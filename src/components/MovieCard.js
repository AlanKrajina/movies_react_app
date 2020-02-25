import React, { Component } from "react";
import SearchedMovieCard from "./SearchedMovieCard";
import Example from "./Hook";

class MovieCard extends Component {
   
  state = {
    likes: 0,
    cond: true
    }


// increment decrement  
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


// style change:
  click = () => {
    if (this.state.color === "blue"){
      return(
        this.setState({
          color: "red"
        })
      )
    } else {
      return(
        this.setState({
          color: "blue"
        })
      )
    }
  }

  click2 = () => {
    this.state.cond ? this.setState({color: "green", cond: false}) : this.setState({color: "yellow", cond: true})

  }



  render() {

    return (                
      <div>
        <img
            src={this.props.review.multimedia.src}
            alt={this.props.review.reviewdisplay_title}
        />
        <h3 style={{color: this.state.color}}>Title</h3>
        <p style={{color: this.state.color}} onClick={this.click}>{this.props.review.display_title}</p>
        <button onClick={this.click2}>click</button>
        <h4>Headline</h4>
        <p>{this.props.review.headline}</p>
        <h4>Summary</h4>
        <p>{this.props.review.summary_short}</p>
        <div>
        <a href={this.props.review.link.url}>Movie link</a>
        </div>
        <button onClick={this.handleLikeClick}>Add like</button>
        <button onClick={this.handleDislikeClick}>Add dislike</button>
        <p>Likes: {this.state.likes}</p>
        <SearchedMovieCard reviews={this.props.review} />
        <Example />
        </div>
    )
  }
}


export default MovieCard;   

