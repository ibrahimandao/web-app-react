import React , { Component}  from 'react';
import         { render   }  from 'react-dom';

class Planning extends Component {

    constructor(props){
       super(props);
       this.state = {
           name:'Gopinath'
       }
    }
    render(){
        return(
            <span>Planning</span>
        );
    }
}

export default Planning;