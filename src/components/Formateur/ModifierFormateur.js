import React, { Component } from 'react';
import axios from 'axios'
import FormateurForm from './FormateurForm';
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class ModifierFormateur extends Component {
    constructor(props){
        super(props);
        this.state = {
            formateur : null,
            id : 0        
        }             
    }

    handleSubmit=(id,form)=>{
        let url = "http://localhost:5154/api/Formateur/update/"+id
        axios.put(url,form).then((resp) =>{

        }).catch((err)=>{
            console.log(err)
        })
    }

    componentDidMount(){       
        this.setState(
            {
                id : this.props.params.id
            },()=> this.getFormateurById(this.state.id)
        )        
    }

    getFormateurById(id){
        let url ="http://localhost:5154/api/Formateur/findbyid/"+id

        axios.get(url).then((resp) =>{
          this.setState({
            formateur : resp.data
          })

        }).catch((err)=>{
            console.log(err)
        })
    }

    render() 
    {
        if(this.state.formateur != null)
            return (
                <FormateurForm action='Edit' validateForm ={this.handleSubmit} formateur={this.state.formateur} id={this.state.id}/>
            );
        else{
            return(<div></div>)
        }        
    }
}

export default withParams(ModifierFormateur);