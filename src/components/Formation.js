import React , { Component}  from 'react';
import         { render   }  from 'react-dom';

class Formation extends Component {

    constructor(props){
       super(props);
       this.state = {
           name:'Gopinath'
       }
    }
    render(){
        return(
            <span>Formation</span>
        );
    }
}

export default Formation;