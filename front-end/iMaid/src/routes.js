import React from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();
// Pages Yago
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
// pages Paulo
import formaPagamento from './pages/formaPagamento/formaPagamento'
import adicionarCartao from './pages/adicionarCartão/adicionarCartao'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName={'Forma De Pagamento'} screenOptions ={{ headerShown: false}}>
                <AppStack.Screen name ="Login" component={Login}/>
                <AppStack.Screen name ="Register" component={Register}/>
                <AppStack.Screen name ="Forgot" component={Forgot}/>

                {/* Telas Paulo C */}
                  
                <AppStack.Screen 
                name= 'Forma De Pagamento' 
                component={ formaPagamento }
                options={{
                    headerStyle: style.header,
                    headerTitleStyle: style.title ,
                    headerTintColor: '#fff' ,
                    headerShown: true
                }}
                
                />
                <AppStack.Screen 
                name= 'Adicionar Cartão' 
                component={ adicionarCartao } 
                options={{
                    headerStyle: style.header,
                    headerTitleStyle: style.title,
                    headerTintColor: '#fff',
                    headerShown: true 
                }}

                />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}

const style = StyleSheet.create({
    header: {
      backgroundColor: '#40e0D0',
    },
    title: {
      color: '#fff'
    },
  })
