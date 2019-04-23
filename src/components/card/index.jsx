import React, {Component} from "react";
import request from 'request';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom';


class CardToShow extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
    postForm = () =>{
        console.log(this.state.password);   
        request.post('http://localhost:5000/rent/login', {form:{rent_pet_id: this.state.username, password: this.state.password}}, function(err,httpResponse,body){
          if(body[0] === "e"){
            localStorage.setItem("token", body )
          }
        })
    }
    render() {

        const { content, type} = this.props;
        if(content && type === 1){
            return(                
                <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src={content.imageUrl} waves />
                    <MDBCardBody>
                    <MDBCardTitle>{content.pet_name}</MDBCardTitle>
                    <MDBCardText>
                        {content.city}
                    </MDBCardText>
                    <MDBBtn href="">Alquilar</MDBBtn>
                    <Link to={`/pet/edit/${content.rent_pet_id}`} content={content}>Editar</Link>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            )

        }
        else if(content && type === 2){
            return(
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
            )

        }

          
        }
}

export default CardToShow;