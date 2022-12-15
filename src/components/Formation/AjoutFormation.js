import React, { Component } from 'react';
import FormationForm from './FormationForm';
import axios from 'axios';

class AjoutFormation extends Component {
    handleSubmit=(form) =>{
        //event.preventDefault();
        let url = "http://localhost:5154/api/Formation/add"        
        
       axios.post(url,form).then((resp)=>{
       }).catch((err)=>{
          console.log(err);
       })
        
     }

    render() {
        return (
            <FormationForm action='Add' validateForm ={this.handleSubmit}/>
        );
    }
}

export default AjoutFormation;