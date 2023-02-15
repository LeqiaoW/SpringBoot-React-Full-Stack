import './App.css';
import { getAllStudents } from './client';
import React, { Component } from 'react';
import { 
  Table,
  Avatar,
  Spin
 } from 'antd';
import { default as Container } from './Container';
import { LoadingOutlined } from '@ant-design/icons';
import Footer from './Footer';


const getIndicatorIcon = () => (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

class App extends Component{

  constructor() {
    super();
    //定义state
    this.state = {
      students: [],
      isFetching: false
    };
  }

  //定义获取学生的方法
  fetchStudents = () => {
    this.setState({
      isFetching: true
    });
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students)
        this.setState({
          students,
          isFetching: false
        })
    }))
  };
  componentDidMount() {
    this.fetchStudents();
  }

  render() {
    const { students, isFetching } = this.state

    if(isFetching) {
      return(
        <Container>
          <Spin indicator={getIndicatorIcon()} />
        </Container>
      )
    }

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
            <Footer numberOfStudents = {students.length}></Footer>
        </Container>
      )
    }
    return (
      <h1>Hello SpringBoot And React</h1>
    );
  }
}

export default App;
