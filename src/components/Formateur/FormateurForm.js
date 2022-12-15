import React, { Component } from 'react';
import Alerte from '../Commun/Alerte';

class FormateurForm extends Component {
    constructor(props){
        super(props);
              
        this.state = {
            nom : this.props.action ==='Add' ? '' : this.props.formateur.name,
            prenom:this.props.action ==='Add' ? '' : this.props.formateur.firstname,
            email :this.props.action ==='Add' ? '' : this.props.formateur.email,            
            action : this.props.action,
            id : this.props.action ==='Add' ? '' : this.props.id,
            alerte : false         
        }
     }
     
    doValidation=(event)=>{
        event.preventDefault();
        const formateur = new Object();
        formateur.name = this.state.nom;
        formateur.email= this.state.email;
        formateur.firstname= this.state.prenom; 

        if(this.props.action ==='Add')
           this.props.validateForm(formateur);
        else
           this.props.validateForm(this.state.id,formateur);
        
        this.setState({alerte : true});
    }
   
    handleNameChange=(event) =>{
        this.setState({nom: event.target.value});
     }

    handlePrenomChange =(event) =>{
        this.setState({prenom: event.target.value});
     }

     

     handleEmailChange=(event) =>{
        this.setState({email: event.target.value});
     }
     
    render() {
        return (
            <div className='container'>              
                 <Alerte showAlerte={this.state.alerte} />          
                <form onSubmit={this.doValidation}>
                <h1>Création d'un formateur:</h1>
                <div className='form-group'>
                    <label>Nom:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.nom} onChange={this.handleNameChange} />
                </div> 

                <div className='form-group'>
                    <label>Prénom:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.prenom} onChange={this.handlePrenomChange} />
                </div>

                <div className='form-group'>
                    <label>Email:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </div>

                <button type="submit" className = "btn btn-primary mt-2">Valider</button>
            </form>
            </div>
            
        );
    }
}

export default FormateurForm;