import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import request from "request";
import { Redirect } from 'react-router-dom';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      id: this.props.match.params.id,
      pet_name: "",
      refugee: "",
      city: "",
      pet_description: "",
      price: "",
      imageUrl: "",
      redirect: false
    };
  }

  getInfo = () => {
    const token = localStorage.getItem("token");
    request.get(
      `http://localhost:5000/rent/edit-pet/${this.props.match.params.id}`,
      { headers: { Authorization: token } },
      function(err, httpResponse, body) {
        const bodyparse = JSON.parse(body);
        this.setState({
          pet: bodyparse.pet,
          pet_name: bodyparse.pet.pet_name,
          city: bodyparse.pet.city,
          refugee: bodyparse.pet.refugee,
          imageUrl: bodyparse.pet.imageUrl,
          price: bodyparse.pet.price,
          pet_description: bodyparse.pet.pet_description
        });
      }.bind(this)
    );
  };
  postForm = () => {
    const token = localStorage.getItem("token");
    request.post(
      `http://localhost:5000/rent/edit-pet/${this.props.match.params.id}/`,
      {
        headers: { Authorization: token },
        form: {
          name: this.state.pet_name,
          refugee: this.state.refugee,
          city: this.state.city,
          price: this.state.price,
          description: this.state.pet_description,
          imageUrl: this.state.imageUrl
        }
      },
      function(err, httpResponse, body) {
        this.setState({ redirect: true });
      }.bind(this)
    );
  };

  deletePet = () => {
    const token = localStorage.getItem("token");
    request.post(
      `http://localhost:5000/rent/edit-pet/${
        this.props.match.params.id
      }/delete/`,
      { headers: { Authorization: token } },
      function(err, httpResponse, body) {
        this.setState({ redirect: true });
      }.bind(this)
    );
  };

  rentPet = () => {
    const token = localStorage.getItem("token");
    request.post(
      `http://localhost:5000/rent/${this.props.match.params.id}/`,
      { headers: { Authorization: token } },
      function(err, httpResponse, body) {
        this.setState({ redirect: true });
      }.bind(this)
    );
  };

  componentDidMount() {
    this.getInfo();
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let redirect = null;
    if (this.state.redirect) {
      redirect = <Redirect to="/rent" />;
    }

    return (
      <MDBContainer className="mt-12">
        {redirect}
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center mb-4">Edita tu mascota</p>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Nombre
                  </label>
                  <input
                    name="pet_name"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    value={this.state.pet_name}
                    onChange={this.handleInput}
                  />
                  <br />

                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Ciudad
                  </label>
                  <input
                    name="city"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    value={this.state.city}
                    onChange={this.handleInput}
                  />
                  <br />

                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Imagen
                  </label>
                  <input
                    name="imageUrl"
                    type="url"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    value={this.state.imageUrl}
                    onChange={this.handleInput}
                  />
                  <br />

                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Descripción
                  </label>
                  <input
                    name="pet_description"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    value={this.state.pet_description}
                    onChange={this.handleInput}
                  />
                  <br />

                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Precio
                  </label>
                  <input
                    name="price"
                    type="number"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    value={this.state.price}
                    onChange={this.handleInput}
                  />
                  <br />

                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Refugio
                  </label>
                  <input
                    name="refugee"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    value={this.state.refugee}
                    onChange={this.handleInput}
                  />
                  <br />
                  <div className="text-center mt-4">
                    <MDBBtn color="unique" onClick={this.postForm}>
                      Editar
                    </MDBBtn>
                    <MDBBtn color="unique" onClick={this.deletePet}>
                      Borrar
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
