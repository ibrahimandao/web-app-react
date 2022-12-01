import React , { Component}  from 'react';
import         { render   }  from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Etudiant extends Component {

    constructor(props){
       super(props);
       this.state = {
           students : []
       }
    }

    getStudent(){
        let url = "http://localhost:5154/api/Etudiant/all"
        axios.get(url).then((response)=>{
          this.setState({
            students : response.data
          });
        }).catch((err) =>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.getStudent();        
    }

    render(){
        return(
           <div> 
            <strong> La liste des étudiants inscrits</strong>
            <div className='container'>
            <Link className='btn btn-primary' to="/AjoutEtudiant">Ajouter</Link>
            <table className='table'>
                <thead>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Matricule</th>
                    <th>Téléphone</th>
                    <th>Ville</th>
                </thead>
                <tbody>
                    {
                        this.state.students.map(item=>
                           <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.firstname}</td>
                                <td>{item.email}</td>
                                <td>{item.matricule}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>
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

export default Etudiant;