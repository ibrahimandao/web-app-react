import React , { Component}  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Formateur extends Component {

    constructor(props){
        super(props);
        this.state = {
            formateur : []
        }
     }
 
     getFormateur(){
         let url = "http://localhost:5154/api/Formateur/all"
         axios.get(url).then((response)=>{
           this.setState({
            formateur : response.data
           });
         }).catch((err) =>{
             console.log(err)
         })
     }
 
     componentDidMount(){
         this.getFormateur();
     }
 
     render(){
         return(
            <div> 
             <strong> La liste des formateurs reconnus :</strong>
             <div className='container'>
             <Link className='btn btn-primary' to="/AjoutFormateur">Ajouter</Link>
             <table className='table'>
                 <thead>
                     <th>Nom</th>
                     <th>Prénom</th>
                     <th>Email</th>
                 </thead>
                 <tbody>
                     {
                         this.state.formateur.map(item=>
                            <tr key={item.id}>
                                 <td>{item.name}</td>
                                 <td>{item.firstname}</td>
                                 <td>{item.email}</td>
                            </tr>                            
                         )
                     }
                 </tbody>
             </table>
             </div>
             
 
             </div>
         );
     }
}

export default Formateur;