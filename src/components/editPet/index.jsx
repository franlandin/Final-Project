import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import request from "request";

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      id: this.props.match.params.id,
      pet_name: null,
      refugee: null,
      city:null,
      pet_description: null,
      price: null,
      imageUrl: null,
      redirect: false

    };
  }

  getInfo = () => {
    const token = localStorage.getItem("token");
    request.get(
      `http://localhost:5000/rent/edit-pet/${this.props.match.params.id}`,{headers:{"Authorization": token}},
      function(err, httpResponse, body) {
        const bodyparse = JSON.parse(body);
        console.log(bodyparse.pet);
        this.setState({ 
            pet: bodyparse.pet,
            pet_name: bodyparse.pet.pet_name,
            city: bodyparse.pet.city,
            refugee: bodyparse.pet.refugee,
            imageUrl: bodyparse.pet.imageUrl,
            price: bodyparse.pet.price,
            pet_description: bodyparse.pet.pet_description

        })
        console.log(bodyparse.pet.pet_name);

      }.bind(this)
    );
  };
  postForm = () =>{
    console.log(this.state.password);   
    request.post(`http://localhost:5000/rent/edit-pet/${this.props.match.params.id}`, {form:{name: this.state.pet_name, refugee: this.state.refugee, city: this.state.city, price: this.state.price, imageUrl:this.state.imageUrl }}, function(err,httpResponse,body){
        // this.setState({redirect: true})
      }
    )
  }

  componentDidMount(){
      this.getInfo();
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {


    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form>
              <p className="h4 text-center mb-4">Edita tu mascota</p>
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                
              >Nombre</label>
              <input
                name="pet_name"
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                value={this.state.pet_name}
                onInput={this.handleInput}
              />
              <br />
              
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                
              >Ciudad</label>
              <input
                name="city"
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                value={this.state.city}
                onInput={this.handleInput}
              />
              <br />
              
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                
              >Imagen</label>
              <input
                name="imageUrl"
                type="url"
                id="defaultFormRegisterNameEx"
                className="form-control"
                value={this.state.imageUrl}
                onInput={this.handleInput}
              />
              <br />
              
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                
              >Descripción</label>
              <input
                name="pet_description"
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                value={this.state.pet_description}
                onInput={this.handleInput}
              />
              <br />
              
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                
              >Precio</label>
              <input
                name="price"
                type="number"
                id="defaultFormRegisterNameEx"
                className="form-control"
                value={this.state.price}
                onInput={this.handleInput}
              />
              <br />

              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                
              >Refugio</label>
              <input
                name="refugee"
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                value={this.state.refugee}
                onInput={this.handleInput}
              />
              <br />
              <div className="text-center mt-4">
                <MDBBtn color="unique" onClick={this.postForm}>
                  Edita
                </MDBBtn>
                <MDBBtn color="unique" type="submit">
                  Borra
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
