import React , { Component}  from 'react';
import         { render   }  from 'react-dom';

class Module extends Component {

    constructor(props){
       super(props);
       this.state = {
           name:'Gopinath'
       }
    }
    render(){
        return(
            <span>Module</span>
        );
    }
}

export default Module;