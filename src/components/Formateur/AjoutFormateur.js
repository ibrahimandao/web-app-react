import React, { Component } from 'react';
import FormateurForm from './FormateurForm';
import axios from 'axios'

class AjoutFormateur extends Component {

    handleSubmit=(form)=>{
        let url ="http://localhost:5154/api/Formateur/add"
        axios.post(url,form).then((resp) =>{

        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <FormateurForm action='Add' validateForm ={this.handleSubmit}/>
        );
    }
}

export default AjoutFormateur;