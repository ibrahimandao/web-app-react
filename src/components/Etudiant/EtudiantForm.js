import React, { Component } from 'react';
import axios from 'axios';
import Alerte from '../Commun/Alerte';

class EtudiantForm extends Component {
    constructor(props){
        super(props);        
        this.state = {
            nom : this.props.action ==='Add' ? '' : this.props.etudiant.name,
            prenom:this.props.action ==='Add' ? '' : this.props.etudiant.firstname,
            email :this.props.action ==='Add' ? '' : this.props.etudiant.email,
            ville : this.props.action ==='Add' ? '' : this.props.etudiant.city,
            formationid : this.props.action ==='Add' ? '3' : this.props.etudiant.formationId,
            matricule : this.props.action ==='Add' ? '' : this.props.etudiant.matricule,
            telephone : this.props.action ==='Add' ? '' : this.props.etudiant.phone,  
            id : this.props.action ==='Add' ? '' : this.props.id,
            formation : [],
            action : this.props.action,
            alerte : false         
        }
     }
     
    doValidation=(event)=>{
        event.preventDefault();
        const etu = new Object();
        etu.name = this.state.nom;
        etu.email= this.state.email;
        etu.phone= this.state.telephone;
        etu.matricule= this.state.matricule;
        etu.city= this.state.ville;
        etu.firstname= this.state.prenom;  
        etu.formationId= this.state.formationid; 
        
        const form = new Object();        
        form.libelle="";
        form.niveau=0;

        etu.formation=form;
        //console.log(JSON.stringify(etu))
        if(this.props.action ==='Add')
           this.props.validateForm(etu);
        else
           this.props.validateForm(this.state.id,etu);
        
        this.setState({alerte : true});
    }
    componentDidMount(){
       this.getFormation();
    }

    getFormation(){
        let url = "http://localhost:5154/api/Formation/all"
        axios.get(url).then((resp)=>{
            this.setState({
                formation : resp.data
            })
           }).catch((err)=>{
              console.log(err);
           })
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

     handleMatriculeChange=(event) =>{
        this.setState({matricule: event.target.value});
     }

     handleVilleChange=(event) =>{
        this.setState({ville: event.target.value});
     }
     handlePhoneChange=(event) =>{
        this.setState({telephone: event.target.value});
     }
     handleFormationChange=(event) =>{
        this.setState({formationid: event.target.value});
     }
     
    render() {
        return (
            <div className='container'>              
                 <Alerte showAlerte={this.state.alerte} />          
                <form onSubmit={this.doValidation}>
                <h1>Création d'un étudiant:</h1>
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
 

                <div className='form-group'>
                    <label>Téléphone:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.telephone} onChange={this.handlePhoneChange} />
                </div>

                <div className='form-group'>
                    <label>Matricule:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.matricule} onChange={this.handleMatriculeChange} />
                </div>

                <div className='form-group'>
                    <label>Ville:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.ville} onChange={this.handleVilleChange} />
                </div>
               

                <div className='form-group'>
                    <label>Formation:</label>  
                    <select className="w-25 form-control" value={this.state.formationid} onChange={this.handleFormationChange}>
                        {
                            this.state.formation.map(item =>
                                <option key={item.id} value={item.id}>{item.libelle}</option>
                            )
                        }
                    </select>          
                   
                </div>
                
                
                <button type="submit" className = "btn btn-primary mt-2">Valider</button>
            </form>
            </div>
            
        );
    }
}

export default EtudiantForm;