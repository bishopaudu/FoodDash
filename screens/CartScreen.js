import { Text,TouchableOpacity,View,Image, ScrollView} from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function CartScreen () {
    const navigation = useNavigation()
    const resturants = featured.restaurants[0]
    return (
      <View className='bg-white flex-1'>
          <View className='relative py-4 shadow-sm'>
              <TouchableOpacity
              style={{backgroundColor:'#f59042'}}
                  className='absolute z-10 rounded-full shadow top-5 left-2'
                  onPress={() =>navigation.goBack()}
                  >
                  <Icon.ArrowLeft strokeWidth={3} stroke='white'/>
              </TouchableOpacity>
              <View>
                  <Text className='text-center font-bold text-xl'>Your Cart</Text>
                  <Text className='text-center text-grey-500'>{resturants.name}</Text>
              </View>
          </View>
          <View style={{backgroundColor:themeColors.bgColor(0.2)}} 
          className='flex-row px-4 items-center'>
              <Image source={require('../assets/images/bikeGuy.png')}
              className='w-20 h-20 rounded-full'/>
              <Text className='flex-1 pl-4'>Deliver in 10minute</Text>
              <TouchableOpacity>
                  <Text className='font-bold' style={{backgroundColor:themeColors.text}}></Text>
              </TouchableOpacity>
          </View>
          <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:50}}
          className='bg-white pt-5'>
              {
                  resturants.dishes.map((dish,index) => {
                      return (
                          <View 
                          className='flex-row item-center space-x-3 py-2 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
                              <Text className='font-bold' style={{color:'blue'}}>2 x</Text>
                              <Image className ='h-14 w-14 rounded-full' source={dish.image}/>
                              <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                              <Text className='font-semibold text-base'>${dish.price}</Text>
                              <TouchableOpacity
                              className='p-1 rounded-full'
                              style={{backgroundColor:themeColors.bgColor(1)}}>
                                  <Icon.Menu strokeWidth={2} height={20} width={20} stroke={'red'}/>
                              </TouchableOpacity>
                          </View>
                      )
                  })
              }
          </ScrollView>
          <View className='p-6 px-8 rounded-t-3xl space-y-3' style={{backgroundColor:themeColors.bgColor(0.2)}}>
            <View className='flex-row justify-between'>
                <Text className='text-grey-700'>Subtotal</Text>
                <Text className='text-grey-700'>$20</Text>
            </View>  
            <View className='flex-row justify-between'>
                <Text className='text-grey-700'>Delivery Fee</Text>
                <Text className='text-grey-700'>$20</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-grey-700 font-extrabold'>Order Total</Text>
                <Text className='text-grey-700 font-extrabold'>$20</Text>
            </View>
            </View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('PreparingOrder')}
            style={{backgroundColor:'#f59042'}} 
            className='p-3 rounded-full'>
                <Text className='text-white text-center font-bold text-lg'>Place order</Text>

            </TouchableOpacity>
        </View>
    )
  
}

