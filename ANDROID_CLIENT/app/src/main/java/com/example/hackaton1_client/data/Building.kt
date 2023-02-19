package com.example.hackaton1_client.data

data class Building(
    val id: Int,
    val update_time: String,
    val creation_time: String,
    val photo_build: String,
    val name_build: String,
    val landlord: Int,
    val address: String,
    val lease_start: String,
    val lease_end: String,
    val personal: List<Int>,
    val get_personal: Map<String, Personal>,
    val services: List<Int>,
    val get_services: List<Service>,
    val income: Int,
    val expenses: Int
) : java.io.Serializable
