import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Form />
      </div>
    );
  }
}

export default App;
