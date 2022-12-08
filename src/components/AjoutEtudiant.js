import React, { Component } from 'react';
import axios from 'axios';
import EtudiantForm from './EtudiantForm';

class AjoutEtudiant extends Component {
    
    handleSubmit=(etu) =>{
        //event.preventDefault();
        let url = "http://localhost:5154/api/Etudiant/add"        
        
       axios.post(url,etu).then((resp)=>{
       }).catch((err)=>{
          console.log(err);
       })
        
     }

    render() {
        return (
            <EtudiantForm action='Add' validateForm ={this.handleSubmit}></EtudiantForm>
        );
    }
}

export default AjoutEtudiant;