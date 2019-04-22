import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import LoginForm from "../login-form";
import RegisterForm from "../RegisterForm";

class ModalPage extends Component {
  state = {
    modal: this.props.modal,
    title: "Sign in",
    register: false
  };

  static getDerivedStateFromProps(props, state) {
    if (state.modal !== props.modal) {
      return {
        ...state,
        modal: props.modal
      };
    }
    return state;
  }

  changeToRegister = () => {
    if (this.state.register === false) {
      this.setState({
        title: "Sign up",
        register: true
      });
    } else {
      this.setState({
        title: "Sign in",
        register: false
      });
    }
  };
  modalContent = () => {
    if (this.state.register === false) {
      return <LoginForm />;
    } else {
      return <RegisterForm />;
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
          <MDBModalHeader toggle={this.toggle}>
            <p className="h4 text-center py-4">{this.state.title}</p>
          </MDBModalHeader>
          <MDBModalBody>{this.modalContent()}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={this.changeToRegister}>
              Sing up
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
