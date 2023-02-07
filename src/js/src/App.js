import './App.css';
import { getAllStudents } from './client';
import React, { Component } from 'react';

class App extends Component{

  constructor() {
    super();
    //定义state
    this.state = {
      students: []
    };
  }

  //定义获取学生的方法
  fetchStudents = () => {
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students)
        this.setState({
          students
        })
    }))
  };
  componentDidMount() {
    this.fetchStudents();
  }

  render() {
    const { students } = this.state
    if(students && students.length) {
      return students.map((student, index) => {
        return (
          <div key ={index}>
            <h2>{student.studentId}</h2>
            <p>{student.firstName}</p>
            <p>{student.lastName}</p>
            <p>{student.gender}</p>
            <p>{student.email}</p>
          </div>
        )
      })
    }
    return (
      <h1>Hello SpringBoot And React</h1>
    );
  }
}

export default App;
