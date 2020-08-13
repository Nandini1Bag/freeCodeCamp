import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
       <Home/>   
      </div>
    );
  }
}

export default App;
