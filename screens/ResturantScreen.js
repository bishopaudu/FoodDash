import { View, Text, ScrollView,Image, TouchableOpacity,StatusBar} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import DishRow from '../components/DishRow';
import {useDispatch} from 'react-redux'
import CartIcon from '../components/CartIcon';
import { setRestaurant } from '../slices/restaurantSlice';
import { useEffect } from 'react'

export default function ResturantScreen() {
  const {params} = useRoute()
  const navigation = useNavigation()
  let item = params
  const dispatch = useDispatch()
  useEffect(() => {
   if(item && item.id){
     dispatch(setRestaurant({...item}))
   }
  }, [])
  
  return (
    <View>
      <CartIcon/>
      <StatusBar style='light' />
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72' source={{uri:item.image}} resize='cover'/>
          <TouchableOpacity onPress={() => navigation.goBack()} className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
            <Icon.ArrowLeft strokeWidth={3} stroke={'#f59042'}/>
          </TouchableOpacity>
        </View>
        <View style={{borderTopLeftRadius:20,borderTopRightRadius:20}}
        className='bg-white  pt-6'>
          <View className='px-5'>
            <Text className='text-3xl font-bold'>{item.name}</Text>
            <View className='flex-row space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
                  <Image source={require('../assets/images/fullStar.png')} className='h-4 w-4'/>
                  <Text className='text-xs'>
                      <Text className='text-green-700'>{item.stars}</Text>
                      <Text className='text-grey-700'>{item.review}K Reviews</Text> .<Text className="font-semibold text-gray-700">{item.category}</Text>
                  </Text>
              </View>
              <View className ='flex-row items-center space-x-1'>
                  <Icon.MapPin color='gray' width='15' height='15'/>
                  <Text className='text-grey-700 text-xs'>NearBy .{item.address}</Text>
              </View>
            </View>
            <Text className='text-grey-500 mt-2 font-bold'>{item.description}</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 text-4xl font-bold'>Menu</Text>
          {
            item.dishes.map((dish,index) => {
              return (
                <DishRow item={{...dish}} key={index}/>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}