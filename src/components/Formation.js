import React , { Component}  from 'react';
import axios from 'axios';

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
             <table className='table'>
                 <thead>
                     <th>Descriptif</th>
                     <th>Niveau</th>
                 </thead>
                 <tbody>
                     {
                         this.state.formations.map(item=>
                            <tr key={item.id}>
                                 <td>{item.libelle}</td>
                                 <td>{item.niveau} année</td>
                            </tr>                            
                         )
                     }
                 </tbody>
             </table>
 
             </div>
         );
     }
}

export default Formation;