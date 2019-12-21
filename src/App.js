import React, { Component } from 'react'
import './App.css';
import Movies from './components/Movies.js';
import Todo from './components/Todo.js';

class App extends Component {

  
  render() {
    return (
      <div>
          <Todo/>        
      </div>
    );
  }
}

export default App;

//<Movies/>