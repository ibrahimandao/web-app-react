import React, { Component,useEffect } from 'react';
import axios from 'axios'

class ModifierFormation extends Component {
     test = null;
    constructor(props){
        super(props);
        this.state = {
            formation : null
        }
     }
     getFormationById(){
        let url = "http://localhost:5154/api/Formation/find/3"
        axios.get(url).then((response)=>{
          return response;
        }).catch((err) =>{
            console.log(err)
        })
        return null;
    }

     componentWillMount(){
        this.test = this.getFormationById();
        console.log(this.test)
     }
     componentDidMount(){
        this.setState({
            formation : this.test
        })
     }
    ValidForm=()=>{
 
    }

    render() {        
        
        return (
            <form onSubmit={this.ValidForm} >
                <h1>Modification d'une formation:</h1>
                <div className='form-group'>
                    <label>Descriptif:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.formation.libelle}  />
                </div> 

                <div className='form-group'>
                    <label>Niveau:</label>            
                    <input className="w-25 form-control" type="text" value={this.state.formation.niveau}  />
                </div>       
                
                
                <button type="submit" className = "btn btn-primary mt-2">Update</button>
        </form>
        );
    }
}

export default ModifierFormation;