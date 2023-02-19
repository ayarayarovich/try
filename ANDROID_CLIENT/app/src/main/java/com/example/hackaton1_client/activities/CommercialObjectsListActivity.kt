package com.example.hackaton1_client.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.commit
import com.example.hackaton1_client.R
import com.example.hackaton1_client.fragments.CommercialObjectsFragment

class CommercialObjectsListActivity : AppCompatActivity() {

    companion object {
        val BUILDING_ID = "BUILDING_ID"
    }

    var building_id: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_commertial_objects_list)

        building_id = if (intent.hasExtra(BUILDING_ID)) intent.extras!!.getInt(BUILDING_ID)
                        else throw Exception("no building id in CommercialObjectsListActivity")

        supportFragmentManager.commit {
            add(R.id.fragment_view,
                CommercialObjectsFragment.newInstance(building_id, 1))
        }

    }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        finish()
    }

}