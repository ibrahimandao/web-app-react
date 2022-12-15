import React , { Component}  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Formation extends Component {

    constructor(props){
        super(props);
        this.state = {
            formations : []
        }
     }
 
     getFormation(){
         let url = "http://localhost:5154/api/Formation/all"
         axios.get(url).then((response)=>{
           this.setState({
            formations : response.data
           });
         }).catch((err) =>{
             console.log(err)
         })
     }
 
     componentDidMount(){
         this.getFormation();
     }
 
     render(){
         return(
            <div> 
             <strong> La liste des formations assurées chez MIT: </strong>
             <div className='container'>
                <Link className='btn btn-primary' to="/AjoutFormation">Ajouter</Link>
                <table className='table'>
                    <thead>
                        <th>Descriptif</th>
                        <th>Niveau</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            this.state.formations.map(item=>
                                <tr key={item.id}>
                                    <td>{item.libelle}</td>
                                    <td>{item.niveau} année</td>
                                    <td>
                                        <Link to={"/modifformation/"+item.id}><img src="/img/modif.jfif" width="25px" height="25px"/></Link>                               
                                    </td>
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

export default Formation;