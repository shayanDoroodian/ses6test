import React, { Component } from 'react';
import Student from './components/student/Student';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      studentList : [
        {
          firstName: 'Shayan',
          lastName: 'Doroodian',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          firstName: 'Masoud',
          lastName: 'Shapouri',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          firstName: 'Sadegh',
          lastName: 'Hashemi',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          firstName: 'Rasoul',
          lastName: 'Mohammadi',
          tel: '5646545',
          email: 'sdsj@skdhs.xc',
        },
        {
          firstName: 'Mohammad',
          lastName: 'Vahedi',
          tel: '4654654654',
          email: 'afdsds@sdsd.xc',
        },
      ]
    }
  }
  changeNameHandler = (e) => {
    console.log(e);

    // this.state.studentList[0].firstName = 'sdss';
    const newState = {...this.state};
    newState.studentList[0].firstName = 'Hamid';
    this.setState(newState);
  };

  changeLastNameHandler = (e) =>{
    const newState = {...this.state};
    newState.studentList[0].lastName = 'Matin';
    this.setState(newState);
  }

  
  render() {
    return (
      <div className='center'>
        <h2 className='title'>Hello Students</h2>
        <button className='btn-change' onClick={this.changeNameHandler}>
          Change Name klhklhlkhl
        </button>
        <Student
          firstName={this.state.studentList[0].firstName}
          lastName={this.state.studentList[0].lastName}
          tel={this.state.studentList[0].tel}
          email={this.state.studentList[0].email}
          click = {this.changeLastNameHandler}
        />
        <hr />
        <Student
          firstName={this.state.studentList[1].firstName}
          lastName={this.state.studentList[1].lastName}
          tel={this.state.studentList[1].tel}
          email={this.state.studentList[1].email}
        />
        <hr />
        <Student
          firstName={this.state.studentList[2].firstName}
          lastName={this.state.studentList[2].lastName}
          tel={this.state.studentList[2].tel}
          email={this.state.studentList[2].email}
        />
        <hr />
        <Student
          firstName={this.state.studentList[3].firstName}
          lastName={this.state.studentList[3].lastName}
          tel={this.state.studentList[3].tel}
          email={this.state.studentList[3].email}
        />
        <hr />
        <Student
          firstName={this.state.studentList[4].firstName}
          lastName={this.state.studentList[4].lastName}
          tel={this.state.studentList[4].tel}
          email={this.state.studentList[4].email}
        />
        <hr />
        
      </div>
    );
  }
}

export default App;
