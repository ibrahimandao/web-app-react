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
    ValidForm=()=>{
        
    }
    render() {
        return (
            <div className='container'>

             <form onSubmit={this.ValidForm} >
                <h1>Modification d'une formation:</h1>
                <div className='form-group'>
                    <label>Descriptif:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.libelle}  />
                </div> 

                <div className='form-group'>
                    <label>Niveau:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.niveau}  />
                </div>       
                
                
                <button type="submit" className = "btn btn-primary mt-2">Valider</button>
            </form>
                
            </div>
        );
    }
}

export default FormationForm;