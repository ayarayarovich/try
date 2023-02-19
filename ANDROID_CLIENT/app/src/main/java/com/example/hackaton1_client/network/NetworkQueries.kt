package com.example.hackaton1_client.network

import android.util.Log
import com.example.hackaton1_client.data.Building
import com.example.hackaton1_client.data.CommercialObject
import com.google.android.material.imageview.ShapeableImageView

object NetworkQueries {

    fun setBuildingPicture(building: Building, imageView: ShapeableImageView){
        RetrofitClient.setPictureByURL(building.photo_build, imageView)
    }

    fun setComObjectPicture(com_object: CommercialObject, imageView: ShapeableImageView){
        if (com_object.photo_com_obj != null) {
            RetrofitClient.setPictureByURL(com_object.photo_com_obj, imageView)
        } else {
            Log.println(Log.DEBUG, "there is no picture", com_object.id.toString())
        }
    }




    fun getBuildings(awaiter:(List<Building>)->Unit){
        Log.println(Log.DEBUG, "getting all ", "buildings")
        RetrofitClient.getAPI().getAllBuildings(1).enqueue(

            DataCallback<List<Building>>{
                Log.println(Log.DEBUG, "getBuildings", "got " + it.size.toString() + "buildings")
                awaiter(it)
            }
        )
    }

    fun getCommercialObjects(building_id: Int, awaiter:(List<CommercialObject>)->Unit){
        Log.println(Log.DEBUG, "getting all com ", "objects for building" + building_id)
        RetrofitClient.getAPI().getCommercialObjects(building_id).enqueue(
            DataCallback<List<CommercialObject>>{
                Log.println(Log.DEBUG, "getBuildings", "got " + it.size.toString() + "com objects")
                awaiter(it)
            }
        )
    }
}