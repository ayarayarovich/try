package com.example.hackaton1_client.data

data class Personal(
    val id: Int,
    val update_time: String,
    val creation_time: String,
    val name: String,
    val surname: String,
    val patronymic: String,
    val email: String,
    val position_id: Int,
    val phone: String
) : java.io.Serializable
