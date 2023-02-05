package com.example.demo.student

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController//注释表示这个类是一个controller
@RequestMapping("student")//表示处理的请求的url
class StudentController {
    @RequestMapping//表示处理请求的方法
    fun getAllStudent(): List<Student>{
        return listOf(
                Student(UUID.randomUUID(), "James", "Bond", "JamesBond@gmail.com", Gender.MALE),
                Student(UUID.randomUUID(), "Elisa", "Tamara", "ElisaTamara@gmail.com", Gender.FEMALE)
        )
    }
}