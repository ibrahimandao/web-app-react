import React, { Component } from 'react';


class Alerte extends Component {
    constructor(props){
        super(props);
        console.log(this.props.showAlerte)
        this.state = {
            showAlerte : this.props.showAlerte
        }
     }
    closeAlerte(){
      this.setState({
        showAlerte : false
      })
    }

    render() {
        console.log(this.state.showAlerte)
        if(this.state.showAlerte)
            return (
            <div  className="alert alert-success alert-dismissible fade show w-25" role="alert">
                <strong>Mise à jour effectuée avec succès!</strong>
                <button onClick={this.closeAlerte} type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button>
            </div>
            );
        else
           return <div></div>
    }
}

export default Alerte;