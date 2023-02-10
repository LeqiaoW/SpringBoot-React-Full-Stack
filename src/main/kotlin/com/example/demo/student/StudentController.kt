package com.example.demo.student

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController//注释表示这个类是一个controller
@RequestMapping("students")//表示处理的请求的url
class StudentController(@Autowired private val studentService: StudentService) {

    @RequestMapping//表示处理请求的方法
    fun getAllStudent(): List<Student>{
        return studentService.getAllStudents()
    }
}