import './App.css';
import { getAllStudents } from './client';
import React, { Component } from 'react';
import { 
  Table,
  Avatar
 } from 'antd';
import { default as Container } from './Container';
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
      //使用table
      const dataSource = students
      const columns = [
        {
          title: '',
          key: 'avatar',
          render: (text, student) => (
            <Avatar size='large' style={{
              backgroundColor: 'orange'
            }}>
              {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
          )
        },
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
        <Container>
          <Table 
            dataSource={dataSource} 
            columns={columns}
            pagination={false}
            rowKey='studentId'/>
        </Container>
      )
    }
    return (
      <h1>Hello SpringBoot And React</h1>
    );
  }
}

export default App;
