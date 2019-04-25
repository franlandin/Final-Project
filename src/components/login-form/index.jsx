import React, { Component } from "react";
import request from 'request';
import { MDBCol, MDBInput, MDBBtn, MDBContainer, MDBRow, NavLink } from "mdbreact";
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // sendForm = () => {
  //   console.log(this.state.username, this.state.password)
  //   fetch('http://localhost:5000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: this.state.username,
  //       password: this.state.password,
  //     })

  //   })
  //   .then(res => res.json())
  //   .catch(err => console.log(err));
  //   //console.log(body);
  // }

  render() {
    let redirect = null;
    if (this.props.redirect) {
      redirect = <Redirect to="/rent" />;
    }

    return (
      <MDBContainer>
        {redirect}
        <MDBRow>
          <MDBCol md="12">        
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="username"
                  value={this.state.username}
                  onInput={this.handleInput}
                />
                <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                name="password"
                value={this.state.password}
                onInput={this.handleInput}
                validate
              />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" onClick={() => {this.props.postForm(this.state.username, this.state.password)}}>
                  Login
                </MDBBtn>
              </div>
            </form>          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}
export default LoginForm;