import React, { Component } from 'react';
import axios from 'axios'
import FormationForm from './FormationForm'
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class ModifierFormation extends Component {
    constructor(props){
        super(props);
        this.state = {
            formation : null,
            id : 0
        }
     }
     getFormationById(id){
        let url = "http://localhost:5154/api/Formation/find/"+id
        axios.get(url).then((response)=>{
          this.setState({
            formation : response.data
          })
        }).catch((err) =>{
            console.log(err)
        })        
    }

     componentDidMount(){
        this.setState(
            {
                id : this.props.params.id
            },()=> this.getFormationById(this.state.id)
        ) 
     }
    ValidForm=(id,form)=>{
      let url = "http://localhost:5154/api/Formation/update/"+id

      axios.put(url,form).then((resp)=>{
        }).catch((err)=>{
            console.log(err);
        })    
    }

    render() {        
        if(this.state.formation != null)
            return (
                <FormationForm action='Edit' formation={this.state.formation} validateForm={this.ValidForm} id={this.state.id} />
            );
        else{
            return(<div></div>)
        }
        
    }
}

export default withParams(ModifierFormation);