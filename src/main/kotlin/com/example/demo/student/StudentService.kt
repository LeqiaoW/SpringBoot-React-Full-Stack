package com.example.demo.student

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class StudentService(@Autowired private val studentDataAccessService: StudentDataAccessService) {

    fun getAllStudents(): List<Student> {
        return studentDataAccessService.getAllStudents()
    }
}