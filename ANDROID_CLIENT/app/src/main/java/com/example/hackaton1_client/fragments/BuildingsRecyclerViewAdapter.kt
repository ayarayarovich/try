package com.example.hackaton1_client.fragments

import android.content.Context
import androidx.recyclerview.widget.RecyclerView
import android.view.LayoutInflater
import android.view.ViewGroup
import com.example.hackaton1_client.data.Building
import com.example.hackaton1_client.databinding.FragmentBuildingBinding
import com.example.hackaton1_client.network.NetworkQueries

/**
 * [RecyclerView.Adapter] that can display a [PlaceholderItem].
 * TODO: Replace the implementation with code for your data type.
 */
class BuildingsRecyclerViewAdapter(
    private val values: List<Building>,
    private val go_to_com_objects: (building_id: Int)->Unit
) : RecyclerView.Adapter<BuildingsRecyclerViewAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(
            FragmentBuildingBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = values[position]
        with(holder.binding){
            NetworkQueries.setBuildingPicture(item, imageView)
            header.text = item.name_build
            addressHeader.text = item.address
            viewExpensesParent.setOnClickListener {
                go_to_com_objects(item.id)
            }
            imageView.setOnClickListener {
                go_to_com_objects(item.id)
            }
        }
    }

    override fun getItemCount(): Int = values.size

    inner class ViewHolder(val binding: FragmentBuildingBinding)
        : RecyclerView.ViewHolder(binding.root) {}

}