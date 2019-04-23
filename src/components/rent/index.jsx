import React, {Component} from "react";
import request from 'request';
import ShowCard from "../showcard";


class Rent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        error: null,
        pets: [],
      };
    }
    loadData = () => {
      const token = localStorage.getItem("token");
      this.setState({loading: true});
      console.log(token);
      request.get('http://localhost:5000/rent/', {headers:{"Authorization": token}},   (err,httpResponse,body) => {
        
        if(err){
            this.setState({error: err})
        }
        else{
            const bodyparse = JSON.parse(body);
            this.setState(
            {pets: bodyparse, loading: false}
        );}
        console.log(this.state.pets[0])
        });
    }
    componentDidMount () { 
      this.loadData()
    }
     
    
  
    render() {
    const { error, loading, pets} = this.state;
    if(loading) return (<div>cargando</div>);
        if(error && error.fatal){
            return <div>Error: {error.message}</div>
        }
        if(error && !error.fatal){
            return <button onClick={this.loadData}>Reload</button>
        }

        if(!pets) return null;
      return (
          pets.map(pet =>
        <ShowCard key={pet.rent_pet_id} content={pet} type={1}/>
      )
      )
    }
  }
  export default Rent;