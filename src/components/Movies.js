import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Grid from 'react-css-grid';

class Movies extends Component {

// ovdje mogu mapirat i prikazat sa jednim <MovieCard/> u returnu
  render() {
    return (
      <div>
        <Grid
          width={320}
          gap={24}>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </Grid>
      </div>
    );
  }
}

export default Movies;