import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Grid from 'react-css-grid';

const NYT_API_KEY = 'Pf2z1uTtMAwdSsefhofGywWzMAAxdjbz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class Movies extends Component {

    constructor(props){
        super(props);
        this.state = {
            reviews: []
        }
      }

      componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(reviewsData => this.setState({ reviews: reviewsData.results }))
      }

// ovdje mogu mapirat i prikazat sa jednim <MovieCard/> u returnu - gotovo
  render() {
        const reviewCard = this.state.reviews.map(review => <MovieCard  review={review}/>)  // all movie reviews

    return (
      <div>
         <Grid
          width={320}
          gap={24}>
              { reviewCard }
          </Grid>

      </div>
    );
  }
}

export default Movies;
