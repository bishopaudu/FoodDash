import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
import HomeScreen from './screens/HomeScreen'
import ResturantScreen from './screens/ResturantScreen'

export default function Navigation() {
    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}