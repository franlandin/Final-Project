import React, {Component} from "react";
import request from "request";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom';


class CardToShow extends Component {
    constructor(props) {
      super(props);
      this.state = {
       redirect:false
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
    rentPet = () =>{
        const token = localStorage.getItem("token");
        console.log(this.props.content.rent_pet_id);   
        request.post(`http://localhost:5000/rent/rent-pet/${this.props.content.rent_pet_id}/`, {headers:{"Authorization": token}, }, function(err,httpResponse,body){
          this.setState({redirect: true})
          }.bind(this)
        )
      }
    render() {

        const { content, type} = this.props;
        if(content && type === 1){
            return(                
                <MDBCol md="4">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src={content.imageUrl} waves />
                    <MDBCardBody>
                    <MDBCardTitle>{content.pet_name}</MDBCardTitle>
                    <MDBCardText>
                        {content.city}
                    </MDBCardText>
                    <MDBCardText>
                        {content.price} €
                    </MDBCardText>
                    <MDBBtn href="" onClick={this.rentPet}>Alquilar</MDBBtn>
                    <MDBBtn><Link to={`/pet/edit/${content.rent_pet_id}`} content={content}>Editar</Link> </MDBBtn>
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
                    <MDBBtn href="#" >MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            )

        }

          
        }
}

export default CardToShow;