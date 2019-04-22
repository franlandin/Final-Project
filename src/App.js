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
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/rent' component={Rent}/>
          
        </Switch>
      </div>
    );
  }
}

export default App;
