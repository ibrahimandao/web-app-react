import React, { Component } from 'react';
import axios from 'axios'
import EtudiantForm from './EtudiantForm';
import {withRouter} from 'react-router';
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class ModifierEtudiant extends Component {
    constructor(props){
        super(props);
        this.state = {
            etudiant : null,
            id : 0        
        }      
        
     }

    componentDidMount(){
        this.setState(
            {
                id : this.props.params.id
            },()=> this.getEtudiantById(this.state.id)
        ) 
       
    }

    getEtudiantById(id){
        let url = "http://localhost:5154/api/Etudiant/findbyid/"+id 
            axios.get(url).then((resp)=>{
                this.setState({
                    etudiant : resp.data           
                })
            }).catch((err)=>{
                console.log(err);
            })
    }    
    
    
     handleUpdate=(id,etu) =>{ 
        let url = "http://localhost:5154/api/Etudiant/update/"+id       
        
        axios.put(url,etu).then((resp)=>{
        }).catch((err)=>{
            console.log(err);
        })        
    }

    render() {
        if(this.state.etudiant != null)
            return (
                <EtudiantForm action='Edit' etudiant={this.state.etudiant} validateForm ={this.handleUpdate} id={this.state.id}/>
            );
        else{
            return(<div></div>)
        }
    }
}

export default withParams(ModifierEtudiant);