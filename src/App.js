import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Switch, Route} from 'react-router-dom';
import Rent from './components/rent';
import Main from './components/landing';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Layout/>
        
      </div>
    );
  }
}

export default App;
