import React , { Component}  from 'react';
import         { render   }  from 'react-dom';
import axios from 'axios';

class Planning extends Component {

    constructor(props){
       super(props);
       this.state = {
           planning:[]
       }
    }

    getPlanning(){
        let url ="http://localhost:5154/api/FormationModule/all"
        axios.get(url).then((response)=>{
           this.setState({
            planning : response.data
           })
        }).catch((err)=>{
            console.log(err);
        })
    }

    componentDidMount(){
        this.getPlanning();
    }
    render(){
        return(
            <span>Planning</span>
        );
    }
}

export default Planning;