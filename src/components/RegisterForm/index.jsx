import React, {Component} from "react";
import request from 'request';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


class RegisterForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        password2: "",
      };
    }
  
    handleInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    postForm = () =>{
      console.log(this.state.password);   
      request.post('http://localhost:5000/users/register', {form:{username: this.state.username, password: this.state.password, password2: this.state.password2}})
  }
  
    render() {
      return (
        <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>            
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                name="username"
                validate
                error="wrong"
                success="right"
                value={this.state.username}
                onInput={this.handleInput}
              />                  
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                name="password"
                validate
                value={this.state.password}
                onInput={this.handleInput}
              />
              <MDBInput
                label="Repeat your password"
                icon="lock"
                group
                type="password"
                name="password2"
                validate
                value={this.state.password2}
                onInput={this.handleInput}
              />
            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" type="submit" onClick={this.postForm}>
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      );
    }
  }
  export default RegisterForm;