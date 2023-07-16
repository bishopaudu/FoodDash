import { View, Text, ScrollView, TouchableOpacity,Image} from 'react-native'
import React,{useState}from 'react'
import { categories } from '../constants'

export default function Categories() {
  const[activeCategory,setActiveCategory] = useState(null)
  return (
    <View className='mt-4'>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className='overflowvisible'
      contentContainerStyle={{paddingHorizontal:15}}>
      {
        categories.map((category,index) => {
          let isActive = category.id ==activeCategory
          let btnClass = isActive ? 'bg-grey-400' : 'bg-grey-200'
          let textClass = isActive ? 'font-semibold text-grey-300' : 'text-grey-500' 
          return (
            <View key={index} className='flex justify-center item-center mr-6'>
              <TouchableOpacity className={'p-1 rounded-full shadow bg-grey-200' + btnClass}onPress={() => setActiveCategory(category.id)}>
                <Image style={{width:45,height:45}} source={category.image}/>
              </TouchableOpacity>
              <Text className={'text-sm' + textClass}>{category.name}</Text>
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  )
}