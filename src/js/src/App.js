import './App.css';
import { getAllStudents } from './client';
import React, { Component } from 'react';
import { Table } from 'antd';
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
      // return students.map((student, index) => {
      //   return (
      //     <div key ={index}>
      //       <h2>{student.studentId}</h2>
      //       <p>{student.firstName}</p>
      //       <p>{student.lastName}</p>
      //       <p>{student.gender}</p>
      //       <p>{student.email}</p>
      //     </div>
      //   )
      // })

      //使用table
      const dataSource = students
      const columns = [
        {
          title: 'StudentId',
          dataIndex: 'studentId',
          key: 'studentId',
        },
        {
          title: 'FirstName',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'LastName',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
      ];
      return(
        <Table dataSource={dataSource} columns={columns}/>
      )
    }
    return (
      <h1>Hello SpringBoot And React</h1>
    );
  }
}

export default App;
