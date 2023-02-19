package com.example.hackaton1_client.activities

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.app.AppCompatDelegate


class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)

        super.onCreate(savedInstanceState)
        setContentView(com.example.hackaton1_client.R.layout.activity_login)

        Log.println(Log.DEBUG, "1", "1")


        //TODO: Здесь входим в аккаунт
        //TODO: Пока просто проверяем связь с сервером

        startActivity(Intent(this, MainActivity::class.java))
        finish()


    }
}