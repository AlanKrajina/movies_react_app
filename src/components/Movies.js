import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Grid from 'react-css-grid';

const NYT_API_KEY = 'Pf2z1uTtMAwdSsefhofGywWzMAAxdjbz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const searchURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?"
                  + `api-key=${NYT_API_KEY}&query=`;

class Movies extends Component {
   
  state = {
    reviews: [],
    test: false,
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(reviewsData => this.setState({ reviews: reviewsData.results }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm) 
    console.log("Input Value: ", this.input.current.value)
  }

  fetchReviews = (searchTerm) => {
    fetch(searchURL.concat(searchTerm))
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results })); // array of objects
  }



  render() {
    const reviewCard = this.state.reviews.map(review => 
    <div className="test">
        <MovieCard  
        review={review} 
        />
    </div>)  

return (
  <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          value={this.state.searchTerm}
          onChange={event => this.setState({searchTerm: event.target.value})}/>
        <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <Grid 
          width={320}
          gap={20}>
              { reviewCard }
        </Grid>
      </div>
      </div>
  )
}}

export default Movies;  