import { View, Text,Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function ResturantCard({item}) {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() =>navigation.navigate('Resturant',{...item})}>
      <View className='mr-6 bg-white rounded-3xl shadow-lg'>
          <Image className='h-36 w-64 rounded-t-3xl' source={{uri:item.image}}/>
          <View className='px-3 pb-4 space-y-2'>
              <Text className='text-lg font-bold pt-2'>{item.name}</Text>
              <View className='flex-row items-center space-x-l'>
                  <Image source={require('../assets/images/fullStar.png')} className='h-4 w-4'/>
                  <Text className='text-xs'>
                      <Text className='text-green-700'>{item.stars}</Text>
                      <Text className='text-grey-700'>{item.review} Reviews</Text> .<Text className="font-semibold text-gray-700">{item.category}</Text>
                  </Text>
              </View>
              <View className ='flex-row items-center space-x-1'>
                  <Icon.MapPin color='gray' width='15' height='15'/>
                  <Text className='text-grey-700 text-xs'>NearBy .{item.address}</Text>
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}