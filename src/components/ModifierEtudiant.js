import React, { Component,useEffect } from 'react';
import axios from 'axios'
import EtudiantForm from './EtudiantForm';

class ModifierEtudiant extends Component {
    constructor(props){
        super(props);
        this.state = {
            etudiant : null        
        }      
        
     }

    componentDidMount(){
        let id = this.props.match.params.id
        this.getEtudiantById(id);
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
                <EtudiantForm action='Edit' etudiant={this.state.etudiant} validateForm ={this.handleUpdate}/>
            );
        else{
            return(<div></div>)
        }
    }
}

export default ModifierEtudiant;