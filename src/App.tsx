import React from 'react';
import logo from './logo.svg';
import movies from './movies.json';
import './App.css';
import Movies from './movies.component';

class App extends React.Component {
  render() {
    return (
      <Movies></Movies>
    );

  }
}

export default App;
