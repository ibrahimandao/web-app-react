import React , { Component}  from 'react';
import         { render   }  from 'react-dom';

class Etudiant extends Component {

    constructor(props){
       super(props);
       this.state = {
           name:'Gopinath'
       }
    }
    render(){
        return(
            <span>hello, i'm student. My name is {this.state.name}</span>
        );
    }
}

export default Etudiant;