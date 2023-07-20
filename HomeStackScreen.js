import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen';
import ResturantScreen from './screens/ResturantScreen'

export default function HomeStackScreen(){
    const HomeStack = createNativeStackNavigator()
    return (
        <HomeStack.Navigator  screenOptions={{headerShown:false}}>
            <HomeStack.Screen name='Home' component={HomeScreen}/>
            <HomeStack.Screen name='PreparingOrder' component={PreparingOrderScreen}/>
            <HomeStack.Screen name='Delivery' component={DeliveryScreen}/>  
            <HomeStack.Screen name='Resturant' component ={ResturantScreen} />
        </HomeStack.Navigator>      
    )
}