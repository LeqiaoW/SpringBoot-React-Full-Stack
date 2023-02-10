package com.example.demo.student

import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component
import org.springframework.stereotype.Service
import java.util.*

@Service
class StudentService {

    fun getAllStudents(): List<Student> {
        return listOf(
                Student(UUID.randomUUID(), "James", "Bond", "JamesBond@gmail.com", Gender.MALE),
                Student(UUID.randomUUID(), "Elisa", "Tamara", "ElisaTamara@gmail.com", Gender.FEMALE)
        )
    }
}