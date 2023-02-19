package com.example.hackaton1_client.network

import android.annotation.SuppressLint
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.os.AsyncTask
import android.util.Log
import com.google.android.material.imageview.ShapeableImageView
import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.converter.scalars.ScalarsConverterFactory
import java.net.URL
import java.util.concurrent.TimeUnit

object RetrofitClient {
    private const val BASE_URL = "http://10.2.0.34:8080"

    val okHttpClient: OkHttpClient = OkHttpClient.Builder()
        .readTimeout(500, TimeUnit.SECONDS)
        .connectTimeout(500, TimeUnit.SECONDS)
        .build()
    private var mRetrofit: Retrofit
            = Retrofit.Builder()
        .baseUrl(BASE_URL)
        .addConverterFactory(ScalarsConverterFactory.create())
        .addConverterFactory(GsonConverterFactory.create())
        .client(okHttpClient)
        .build()

    fun getAPI(): CubanoidsAPI {
        return mRetrofit.create(CubanoidsAPI::class.java)
    }

    private class DownloadImageTask(var bmImage: ShapeableImageView) :
        AsyncTask<String?, Void?, Bitmap?>() {

        override fun onPostExecute(result: Bitmap?) {
            bmImage.setImageBitmap(result)
        }

        @SuppressLint("LongLogTag")
        override fun doInBackground(vararg urls: String?): Bitmap? {
            val urldisplay = urls[0]
            var mIcon11: Bitmap? = null
            try {
                val inputStream = URL(urldisplay).openStream()
                mIcon11 = BitmapFactory.decodeStream(inputStream)
            } catch (e: Exception) {
                Log.e("Ошибка передачи изображения", e.message!!)
                e.printStackTrace()
            }
            return mIcon11
        }
    }



    fun setPictureByURL(URL: String?, view: ShapeableImageView) {
        Log.println(Log.DEBUG, "getting picture", BASE_URL+'/'+URL)
        DownloadImageTask(view).execute(BASE_URL + '/'+ URL)
    }

}