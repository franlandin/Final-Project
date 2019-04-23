import React from 'react';
import Navbar from '../navbar';
import Main from '../landing';
import ModalPage from '../modal';
import {Switch, Route} from 'react-router-dom';
import Rent from '../rent';
import LoginForm from '../login-form';
import FooterPage from '../footer';
import RegisterForm from '../RegisterForm';
import FormPage from '../editPet';

function Layout(props) {
  return (
    <div>
        <Navbar/>
        <ModalPage/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/rent' component={Rent}/>  
          <Route path='/login' component={LoginForm}/>
          <Route path='/register' component={RegisterForm}/>
          <Route path='/pet/edit/:id' component={FormPage}/>        
        </Switch>
        <FooterPage/>
    </div>
  );
}
export default Layout;
