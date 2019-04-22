import React, {Component} from "react";
import request from 'request';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


class Rent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pets: [],
      };
    }

    componentDidMount () { 
      const token = localStorage.getItem("token");
      console.log(token);
      request.get('http://localhost:5000/rent/', {headers:{"Authorization": token}},   (err,httpResponse,body) =>{
        
        this.setState(
            {pets: body}
        );
        console.log(this.state.pets)
        });
    }
     
    
  
    render() {
      return (
        <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                {/* <MDBCardImage className="img-fluid" src="rent" waves /> */}
                <MDBCardBody>
                <MDBCardTitle>"hola"</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
      );
    }
  }
  export default Rent;