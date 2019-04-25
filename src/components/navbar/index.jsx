import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import ModalPage from "../modal";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  showModal = () => {
    this.setState({
      modal: true
    });
  };


  render() {
    let login = (
      <MDBNavLink to="/login" onClick={this.toggle}>
        <div className="d-none d-md-inline">Login </div>
        <MDBIcon icon="sign-in-alt" className="d-inline-inline" />
      </MDBNavLink>
    );
    if (this.props.login) {
      login = (
        <React.Fragment>
          <MDBNavLink to="/" onClick={this.props.deleteToken}>
          <div className="d-none d-md-inline">Logout </div>
          <MDBIcon icon="sign-in-alt" className="d-inline-inline" />
          </MDBNavLink>
        </React.Fragment>
      );
    }
    return (
      <div>
        <header>
          <MDBNavbar color="indigo" dark expand="md" className="mb-5">
            <MDBNavbarBrand href="/">
              <strong>Mas.cot</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/rent">Rent</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                {login}
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;
