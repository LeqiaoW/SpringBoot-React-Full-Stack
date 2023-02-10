package com.example.demo.student

import org.springframework.stereotype.Repository
import java.util.*

@Repository// 定义为数据层
class StudentDataAccessService {

    fun getAllStudents(): List<Student>{
        return listOf(
                Student(UUID.randomUUID(), "James", "Bond", "JamesBond@gmail.com", Gender.MALE),
                Student(UUID.randomUUID(), "Elisa", "Tamara", "ElisaTamara@gmail.com", Gender.FEMALE)
        )
    }
}