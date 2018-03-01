import React, { Component } from 'react';
import HomePage from './HomePage';

class App extends Component {
  renderHomePage() {
    return <HomePage />
  }

  render() {
    return this.renderHomePage();
  }
}

export default App;
