import React , { Component}  from 'react';
import axios from 'axios';

class Module extends Component {

    constructor(props){
       super(props);
       this.state = {
           modules : []
       }
    }

    getModules(){
        let url = "http://localhost:5154/api/Module/all";
       axios.get(url).then((response)=>{
         this.setState({
            modules : response.data
         })
       }).catch((err)=>{
         console.log(err);
       })
    }

    componentDidMount(){
        this.getModules();
    }

    render(){
        return(
            <div> 
            <strong>Liste des modules :</strong>
            <table className='table'>
                <thead>
                    <th>Descriptif</th>
                    <th>Présentielle</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        this.state.modules.map(item=>
                           <tr key={item.id}>
                                <td>{item.descriptif}</td>
                                <td>{<input type="Checkbox" checked={item.isOneline} read-only="true"/>}</td>
                                <td>{item.formateur.name}</td>
                                <td>{item.formateur.firstname}</td>
                                <td>{item.formateur.email}</td>
                           </tr>                            
                        )
                    }
                </tbody>
            </table>

            </div>
        );
    }
}

export default Module;