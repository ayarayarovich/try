package com.example.hackaton1_client.network

import com.example.hackaton1_client.data.Building
import com.example.hackaton1_client.data.CommercialObject
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Path

interface CubanoidsAPI {
    @GET("/get_buildings/{id}/")
    fun getAllBuildings(
        @Path("id") id: Int
    ) : Call<List<Building>>

    @GET("/get_com_objects/{id}/")
    fun getCommercialObjects(
        @Path("id") id: Int
    ): Call<List<CommercialObject>>
}