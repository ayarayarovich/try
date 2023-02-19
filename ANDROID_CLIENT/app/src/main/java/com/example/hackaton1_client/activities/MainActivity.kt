package com.example.hackaton1_client.activities

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.fragment.app.commit
import com.example.hackaton1_client.R
import com.example.hackaton1_client.fragments.*

class MainActivity : AppCompatActivity() {
    enum class Choices {
        OBJECTS,
        PAYMENTS,
        PROFILE
    }

    private var currentFragment: Fragment? = null

    private fun setMainFragment(newFragment: Fragment?){
        if (newFragment == null) Toast.makeText(this, "Не готово)", Toast.LENGTH_SHORT).show()
        else
            supportFragmentManager.commit{
                if (currentFragment != null) remove(currentFragment!!)
                add(R.id.main_fragment, newFragment)
                currentFragment = newFragment
            }
    }

    private fun goToComObjects(building_id: Int){
        val intent = Intent(this, CommercialObjectsListActivity::class.java)
        intent.putExtra(CommercialObjectsListActivity.BUILDING_ID, building_id)
        startActivity(intent)
    }


    private fun makeChoice(choice: Choices) {
        setMainFragment(
            when (choice) {
                Choices.OBJECTS -> BuildingsFragment{goToComObjects(it)}
                Choices.PAYMENTS -> PaymentFragment()
                Choices.PROFILE -> ProfileFragment()
                else -> throw Exception("No such choice")
            }
        )

        val objectsChoice = findViewById<View>(R.id.objects_choice)
        val objectsChoiceTextView = findViewById<TextView>(R.id.objects_choice_text_view)
        val paymentChoice = findViewById<View>(R.id.payment_choice)
        val paymentChoiceTextView = findViewById<TextView>(R.id.payment_choice_text_view)
        val profileChoice = findViewById<View>(R.id.profile_choice)
        val profileChoiceTextView = findViewById<TextView>(R.id.profile_choice_text_view)

        objectsChoice.setBackgroundResource(R.drawable.objects_choice_off)
        objectsChoiceTextView.setTextColor(resources.getColor(R.color.inactiveWhite))

        paymentChoice.setBackgroundResource(R.drawable.payment_choice_off)
        paymentChoiceTextView.setTextColor(resources.getColor(R.color.inactiveWhite))

        profileChoice.setBackgroundResource(R.drawable.profile_choice_off)
        profileChoiceTextView.setTextColor(resources.getColor(R.color.inactiveWhite))


        when (choice) {
            Choices.OBJECTS -> {
                objectsChoice.setBackgroundResource(R.drawable.objects_choice_on)
                objectsChoiceTextView.setTextColor(resources.getColor(R.color.white))
            }
            Choices.PAYMENTS -> {
                paymentChoice.setBackgroundResource(R.drawable.payment_choice_on)
                paymentChoiceTextView.setTextColor(resources.getColor(R.color.white))
            }
            Choices.PROFILE -> {
                profileChoice.setBackgroundResource(R.drawable.profile_choice_on)
                profileChoiceTextView.setTextColor(resources.getColor(R.color.white))
            }
        }

    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val objectsChoiceClickArea = findViewById<View>(R.id.objects_choice_click_area)
        val paymentChoiceClickArea = findViewById<View>(R.id.payment_choice_click_area)
        val profileChoiceClickArea = findViewById<View>(R.id.profile_choice_click_area)

        objectsChoiceClickArea.setOnClickListener {
            Log.println(Log.DEBUG, "objects choice", "choosen")
            makeChoice(Choices.OBJECTS)
        }

        paymentChoiceClickArea.setOnClickListener {
            Log.println(Log.DEBUG, "payment choice", "choosen")
            makeChoice(Choices.PAYMENTS)
        }

        profileChoiceClickArea.setOnClickListener {
            Log.println(Log.DEBUG, "profile choice", "choosen")
            makeChoice(Choices.PROFILE)
        }


        Log.println(Log.DEBUG, "2", "2")
        makeChoice(Choices.OBJECTS)
        Log.println(Log.DEBUG, "3", "3")

    }
}