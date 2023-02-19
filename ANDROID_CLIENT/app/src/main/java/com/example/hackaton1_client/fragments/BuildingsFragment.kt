package com.example.hackaton1_client.fragments

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.hackaton1_client.R
import com.example.hackaton1_client.network.NetworkQueries

/**
 * A fragment representing a list of Items.
 */
class BuildingsFragment(val go_to_com_objects: (Int)->Unit) : Fragment() {

    private var columnCount = 1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        arguments?.let {
            columnCount = it.getInt(ARG_COLUMN_COUNT)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_buildings_list,
            container, false)

        // Set the adapter
        if (view is RecyclerView) {

            NetworkQueries.getBuildings { buildings ->
                Log.println(Log.DEBUG, "got buildings", "")
                with(view) {
                    layoutManager = when {
                        columnCount <= 1 -> LinearLayoutManager(context)
                        else -> GridLayoutManager(context, columnCount)
                    }
                    adapter = BuildingsRecyclerViewAdapter(buildings, go_to_com_objects)
                }

            }


        }
        return view
    }

    companion object {

        // TODO: Customize parameter argument names
        const val ARG_COLUMN_COUNT = "column-count"

        // TODO: Customize parameter initialization
        @JvmStatic
        fun newInstance(columnCount: Int, go_to_com_objects: (Int) -> Unit) =
            BuildingsFragment(go_to_com_objects).apply {
                arguments = Bundle().apply {
                    putInt(ARG_COLUMN_COUNT, columnCount)
                }
            }
    }
}