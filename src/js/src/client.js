import fetch from 'unfetch/src';

// 向url：localhost:8080/students 发送请求,但是这种写法太过复杂
// 如果这个 Web 应用很大或者部署到了其他端口，localhost:8080 则应该提取出来，url只保留 /students
// 要实现这个，需要到根目录的 package.json 中定义公共属性 proxy
// const getAllStudents = () => fetch('localhost:8080/students');

export const getAllStudents = () => fetch('/students');
