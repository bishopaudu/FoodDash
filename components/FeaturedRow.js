import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { featured } from '../constants'
import ResturantCard from './ResturantCard'

export default function FeaturedRow({title,description,restaurants}) {
    console.log(title)
  return (
    <View>
    <View className='flex-row justify-between items-center px-4'>
        <View> 
        <Text className='font-bold text-lg'>{title}</Text>
        <Text className='text-grey-500 text-xs'>{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}} className='font-semibold'>see All</Text>
        </TouchableOpacity>
    </View>
   <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle ={{
        paddingHorizontal:15
    }}
    className='overflow-visible py-5'>
        {
            restaurants.map((restaurant,index) => {
                return (
                    <ResturantCard
                    item={restaurant}
                    key={index}
                    />
                )
            })
        }

    </ScrollView>
    </View>
    )
}

