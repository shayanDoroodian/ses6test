import React, {Component} from 'react';

import './Student.css';

export default class Student extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>{this.props.firstName} {this.props.lastName}</h2>
                <p>Tel : {this.props.tel}</p>
                <p>E-mail: {this.props.email}</p>
                <button onClick={this.props.click}>Change Last name</button>
            </div>
        );
    }
}
// export default Student;

