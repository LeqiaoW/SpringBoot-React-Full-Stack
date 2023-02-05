package com.example.demo.student

import java.util.UUID

data class Student(
    val studentId: UUID,
    val firstName: String,
    val lastName: String,
    val email: String,
    val gender: Gender
)

enum class Gender{
    MALE, FEMALE
}