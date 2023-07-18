import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
import HomeScreen from './screens/HomeScreen'
import ResturantScreen from './screens/ResturantScreen'
import CartScreen from './screens/CartScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen';

export default function Navigation() {
    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen name="PreparingOrder" options={{presentation:'fullScreenModal'}}component={PreparingOrderScreen} />
      <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} /> 
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}