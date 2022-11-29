import React , { Component}  from 'react';
import         { render   }  from 'react-dom';

class Formateur extends Component {

    constructor(props){
       super(props);
       this.state = {
           name:'Gopinath'
       }
    }
    render(){
        return(
            <span>Formateur</span>
        );
    }
}

export default Formateur;