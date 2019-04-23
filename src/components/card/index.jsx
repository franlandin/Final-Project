import React, {Component} from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, Card } from 'mdbreact';


class CardToShow extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
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
                    <MDBBtn href="#">Alquilar</MDBBtn>
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