import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CartScreen from './screens/CartScreen'
import UserScreen from './screens/UserScreen';
import HomeStackScreen from './HomeStackScreen'
import * as Icon from "react-native-feather";



export default function Navigation() {
  const Tab = createBottomTabNavigator()
    return(
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}} tabBarOptions={{
          activeTintColor:'#f59042',
          inactiveTintColor:'gray'
        }}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{
          tabBarLabel:'Home',
          tabBarIcon:({color,size}) => <Icon.Home color={color} size={size}/>
        }} />
        <Tab.Screen name="Cart" component={CartScreen} 
        options={{
          tabBarIcon:({color,size}) => <Icon.ShoppingCart color={color} size={size}/>
        }}
        />
        <Tab.Screen name="User" component={UserScreen} options={{
            tabBarLabel:'Account',
            tabBarIcon:({color,size}) => <Icon.Users color={color} size={size}/>

        }}
        />
        </Tab.Navigator>
        </NavigationContainer>
    ) 
    
    
    {/*(
      


    {/*<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen name="PreparingOrder" options={{presentation:'fullScreenModal'}}component={PreparingOrderScreen} />
      <Stack.Screen name="Cart" component={CartScreen} /> 
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>x
    )*/}
}

