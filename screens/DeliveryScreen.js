import {Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import MapView, {Marker} from 'react-native-maps'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import useSelector from 'react-native'
import { selectRestaurant } from '../slices/restaurantSlice'

export default function DeliveryScreen() {
    const Resturant = useSelector(selectRestaurant)
    const navigation = useNavigation()
  return (
    <View className='flex-1'>
        <MapView
        initialRegion={{
            latitude:Resturant.lat,
            longitude:Resturant.lng,
            latitudeDelta:0.01,
            longitudeDelta:0.01,
        }}className='flex-1'
        mapType='standard'>
            <Marker
            coordinate={{
                latitude: Resturant.lat,
                longitude:Resturant.lng,
            }} 
            title={Resturant.name}
            description={Resturant.description}
            pinColor={'#f59042'}
            />
        </MapView>
        <View className='rounded-t-3xl -mt-12 bg-white relative'>
            <View className='flex-row justify-between px-5 pt-10'>
                <View>
                    <Text className='text-lg text-gray-700 font-semibold'>Estimate Arrival</Text>
                    <Text className='text-lg text-gray-700 font-extrabold text-gray-700'>20 minutes t0 30 minutes</Text>
                    <Text className='mt-2 text-grey-700 font-semibold'>Order on it way</Text>
                </View> 
                <Image className='w-24 h-24' source={require('../assets/images/bikeGuy.png')}/>
            </View>
            <View style={{backgroundColor:'#f59042'}} className='p-2 flex-row justify-between items-center rounded-full my-5 mx-5'>
                <View className='p-1 rounded-full' style={{backgroundColor:'rgba(255,255,255,0.4)'}}>
                    <Image className='h-16 w-16 rounded-full' 
                    source={require('../assets/images/deliveryGuy.png')}/>
                </View>
                <View className='flex-1 ml-3'>
                    <Text className='text-lg font-bold text-white'>Jacob Esau</Text>
                    <Text className='font-semibold text-white'>Your Rider</Text>
                </View>
                <View className='flex-row items-center spacing-x-3 mr-3'>
                    <TouchableOpacity className='bg-white p-2 rounded-full'>
                        <Icon.Phone fill={'#f59042'} stroke={'#f59042'}/>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white p-2 rounded-full' onPress={() => navigation.navigate('Home')}>
                        <Icon.X fill={'red'} strokeWidth={5}/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </View>
  )
}

