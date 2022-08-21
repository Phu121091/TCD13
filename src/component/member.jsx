import React, { Component } from 'react';


class Member extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='member'>
                <img src={this.props.avatar}/>
                <h5>Name : {this.props.name}</h5>
                <h5>Age : {this.props.age}</h5>
                <h5>Birthday : {this.props.bday}</h5>                
                <h5>Address : {this.props.address}</h5>
            </div> 
            
        )
    }
}  

export default Member