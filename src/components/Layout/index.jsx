import React from 'react';
import Navbar from '../navbar';
import Main from '../landing';
import ModalPage from '../modal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Rent from '../rent';
import LoginForm from '../login-form';

function Layout(props) {
  return (
    <div>
        <Navbar/>
        <ModalPage/>
        <LoginForm/>
    </div>
  );
}
export default Layout;
