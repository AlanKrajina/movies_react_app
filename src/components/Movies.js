import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Grid from 'react-css-grid';

const NYT_API_KEY = 'Pf2z1uTtMAwdSsefhofGywWzMAAxdjbz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class Movies extends Component {
   
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(reviewsData => this.setState({ reviews: reviewsData.results }))
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
         <Grid 
          width={320}
          gap={20}>
              { reviewCard }
          </Grid>
      </div>
    );
  }
}

export default Movies;
          

/*

if img je kliknuta onda pretvara review u jedan review koji je findan


to u moviecard napravit da finda i onda kreira unutar img? ili da rendera ShowMovie
*/