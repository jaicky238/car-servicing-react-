import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './components/Login';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Login/>
      {/* <Hero/> */}
        <Route path="/" exact component={Home}/>
        {/* <Route path="/contact"  component={ContactUs}/>
        <Route path="/about"  component={AboutUs}/>
        <Route path="/post/:postId" component={Post}/> */}
    </div>
    </Router>

  );
}
export default App;
