import React, {Component} from "react";
import CardToShow from '../card';


class ShowCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
    render() {

        const { error, loading, content, type} = this.props;
        if(loading) return (<div>cargando</div>);
        if(error && error.fatal){
            return <div>Error: {error.message}</div>
        }
        if(error && !error.fatal){
            return <button onClick={this.loadData}>Reload</button>
        }

        if(!content) return null;

        return (

            <CardToShow content={content} type={type}/>
        )
    }
}

export default ShowCard;