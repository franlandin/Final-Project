import React from 'react';
import { MDBMask, MDBView } from 'mdbreact';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
        <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <h2>Bienvenido a Mas.cot</h2>
            <h5>Tu web para ayudar a los más peludos</h5>
            <br />
            <p>Insert texto motivador here </p>
        </MDBMask>
        </MDBView>
 
      </div>
    );
  }
}

export default Main;