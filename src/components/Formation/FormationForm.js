import React, { Component } from 'react';

class FormationForm extends Component {
    constructor(props){
        super(props);   
        this.state = {
            libelle : this.props.action ==='Add' ? '' : this.props.formation.libelle,
            niveau :this.props.action ==='Add' ? '' : this.props.formation.niveau,
            id : this.props.action ==='Add' ? '' : this.props.id,
            action : this.props.action,
            alerte : false         
        }
     }
    ValidForm=(event)=>{
        event.preventDefault();
        const form = new Object();
        form.libelle = this.state.libelle;
        form.niveau= this.state.niveau;

        console.log(JSON.stringify(form))

        if(this.props.action ==='Add')
           this.props.validateForm(form);
        else
           this.props.validateForm(this.state.id,form);
    }

    handleDescription=(event)=>{
       this.setState({libelle : event.target.value})
    }

    handleNiveau=(event)=>{
        this.setState({niveau : event.target.value})
    }
    render() {
        return (
            <div className='container'>

             <form onSubmit={this.ValidForm} >
                <h1>Modification d'une formation:</h1>
                <div className='form-group'>
                    <label>Descriptif:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.libelle} onChange={this.handleDescription}  />
                </div> 

                <div className='form-group'>
                    <label>Niveau:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.niveau} onChange={this.handleNiveau}  />
                </div>       
                
                
                <button type="submit" className = "btn btn-primary mt-2">Valider</button>
            </form>
                
            </div>
        );
    }
}

export default FormationForm;