import React, { Component } from 'react';
import axios from 'axios'
import FormationForm from './FormationForm'

class ModifierFormation extends Component {
    constructor(props){
        super(props);
        this.state = {
            formation : null
        }
     }
     getFormationById(){
        let url = "http://localhost:5154/api/Formation/find/3"
        axios.get(url).then((response)=>{
          this.setState({
            formation : response
          })
        }).catch((err) =>{
            console.log(err)
        })        
    }

     componentWillMount(){
        
     }
     componentDidMount(){
        this.getFormationById();
     }
    ValidForm=()=>{
 
    }

    render() {        
        if(this.state.formation != null)
            return (
                <FormationForm action='Edit' formation={this.state.formation} />
            );
        else{
            return(<div></div>)
        }
        
    }
}

export default ModifierFormation;