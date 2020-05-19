import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions ={{ headerShown: false}}>
                <AppStack.Screen name ="Login" component={Login}/>
                <AppStack.Screen name ="Register" component={Register}/>
                <AppStack.Screen name ="Forgot" component={Forgot}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
