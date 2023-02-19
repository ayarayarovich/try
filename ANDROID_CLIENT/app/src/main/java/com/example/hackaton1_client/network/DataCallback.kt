package com.example.hackaton1_client.network
import android.util.Log
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
class DataCallback<T>(val awaiter: (T)->Unit) : Callback<T> {

    override fun onResponse(call: Call<T>, response: Response<T>){
        if (response.isSuccessful){
            Log.println(Log.DEBUG, "Successful response!", "")
            awaiter(response.body()!!)
        } else {
            Log.println(Log.ERROR, "DataCallback Err", "Response wasn't succesfull: "
                    + response.message() + " " + response.code() + " " + call.request().url)
        }
    }

    override fun onFailure(call: Call<T>, t: Throwable) {
        Log.println(Log.ERROR, "DataCallback Err", "Response was failed: " + t.message)
    }
}