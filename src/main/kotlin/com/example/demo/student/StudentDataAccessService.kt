package com.example.demo.student

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository
import java.util.*

@Repository// 定义为数据层
class StudentDataAccessService(
        @Autowired private val jdbcTemplate: JdbcTemplate//引入 JdbcTemplate 进行与数据库交互
) {

    fun getAllStudents(): List<Student>{
        val sql: String = "" +
                "SELECT " +
                "student_id, " +
                "first_name, " +
                "last_name, " +
                "email, " +
                "gender " +
                "FROM student"

        return jdbcTemplate.query(sql, mapStudentFromDb())
    }

    //将RowMapper方法抽离，提高可阅读性
    private fun mapStudentFromDb() = RowMapper<Student> { resultSet, i ->
        //resultSet是查询到的结果集
        // i 代表该数据的下标，是结果集的第几个数据
        val studentIdStr = resultSet.getString("student_id")
        val studentId = UUID.fromString(studentIdStr)
        val firstName = resultSet.getString("first_name")
        val lastName = resultSet.getString("last_name")
        val email = resultSet.getString("email")
        val gender = Gender.valueOf(resultSet.getString("gender").uppercase())

        //将数据库数据转化为 Student类
        Student(
                studentId = studentId,
                firstName = firstName,
                lastName = lastName,
                email = email,
                gender = gender
        )
    }
}