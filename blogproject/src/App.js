import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUs from './containers/ContactUs/ContactUs';
import AboutUs from './containers/AboutUs/AboutUs';
import Post from './containers/Post/Post';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contact-us"  component={ContactUs}/>
        <Route path="/about-us"  component={AboutUs}/>
        <Route path="/post/:slug" component={Post} />

        
      </div>
    </Router>
    
  );
}

export default App;