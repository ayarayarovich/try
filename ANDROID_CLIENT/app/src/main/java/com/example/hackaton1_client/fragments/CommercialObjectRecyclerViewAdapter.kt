package com.example.hackaton1_client.fragments

import androidx.recyclerview.widget.RecyclerView
import android.view.LayoutInflater
import android.view.ViewGroup
import com.example.hackaton1_client.data.CommercialObject
import com.example.hackaton1_client.databinding.FragmentCommercialObjectBinding

import com.example.hackaton1_client.network.NetworkQueries

/**
 * [RecyclerView.Adapter] that can display a [PlaceholderItem].
 * TODO: Replace the implementation with code for your data type.
 */
class CommercialObjectRecyclerViewAdapter(
    private val values: List<CommercialObject>
) : RecyclerView.Adapter<CommercialObjectRecyclerViewAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {

        return ViewHolder(
            FragmentCommercialObjectBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )

    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = values[position]
        val symbols = 150
        with(holder.binding){
            NetworkQueries.setComObjectPicture(item, imageView)
            header.text = item.rent_price.toString()
            rentPriceHeader.text = if (item.description.length > symbols)
                                        item.description.subSequence(0,symbols).toString()+"..."
                                    else item.description
            square.text = item.square.toString() + "m²"
        }

    }

    override fun getItemCount(): Int = values.size

    inner class ViewHolder(val binding: FragmentCommercialObjectBinding) :
        RecyclerView.ViewHolder(binding.root) {

    }

}