import { Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CartIcon() {
  const navigation = useNavigation()
    return (
      <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity 
          style={{backgroundColor:'#f59042'}} 
          onPress={() => navigation.navigate('Cart')}
          className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
            <View className="p-2 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
              <Text className="font-extrabold text-white text-lg">Total</Text>
            </View>
            
            <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
            <Text className="font-extrabold text-white text-lg">${25}</Text>
        
        </TouchableOpacity>
      
    </View>
    )
  
}

