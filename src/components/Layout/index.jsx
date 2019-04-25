import React, {Component} from 'react';
import Navbar from '../navbar';
import Main from '../landing';
import ModalPage from '../modal';
import {Switch, Route} from 'react-router-dom';
import Rent from '../rent';
import LoginForm from '../login-form';
import FooterPage from '../footer';
import RegisterForm from '../RegisterForm';
import FormPage from '../editPet';
import request from 'request';

class Layout extends Component {

  state = {
    login: false
  }
  componentDidMount() {
    if(localStorage.getItem("token")) {
      this.setState({login:true});
    }
  }
  deleteToken = () => {
    localStorage.removeItem("token");
    this.setState({login:false})
  }
  postForm = (username, password) =>{ 
    request.post('http://localhost:5000/users/login', {form:{username: username, password: password}}, (err,httpResponse,body) => {
      if(body[0] === "e"){
        localStorage.setItem("token", body );
        this.setState({login:true});
      }
    })
  }
  render() {
  return (
    <div>
        <Navbar login = {this.state.login} deleteToken = {this.deleteToken}/>
        <ModalPage/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/rent' component={Rent}/>  
          <Route path='/login' component={() => <LoginForm postForm={this.postForm} redirect = {this.state.login} />}/>
          <Route path='/register' component={RegisterForm}/>
          <Route path='/pet/edit/:id' component={FormPage}/>        
        </Switch>
        <FooterPage/>
    </div>
  );
}
}
export default Layout;
