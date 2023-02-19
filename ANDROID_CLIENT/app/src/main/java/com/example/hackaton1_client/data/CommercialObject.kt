package com.example.hackaton1_client.data

data class CommercialObject(
    val id: Int,
    val update_time: String,
    val creation_time: String,
    val pointer: Long,
    val building_id: Int,
    val leaser_id: Int,
    val rent_price: Int,
    val square: Double,
    val description: String,
    val document: String?,
    val photo_com_obj: String?
) : java.io.Serializable
