import React from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Constants from 'expo-constants'; // Ler as constantes do aplicativo

const AppStack = createStackNavigator();
// Pages Yago
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
// pages Paulo
import formaPagamento from './pages/formaPagamento/formaPagamento'
import adicionarCartao from './pages/adicionarCartão/adicionarCartao'
import editarCartao from './pages/editarCartao/editarCartao'
// pages Daniel
import Feed from './pages/Feed';
import pagamento from './pages/pagamento/pagamento';

globalThis.ip = Constants.manifest.extra.ip //Pega o IP de app.json e coloca em uma variavel global 
globalThis.porta = Constants.manifest.extra.porta //Pega a porta do app.json
console.disableYellowBox = true // Desabilita as Warnings
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName={'Feed'} screenOptions ={{ headerShown: false}}>
                <AppStack.Screen name ="Login" component={Login}/>
                <AppStack.Screen name ="Register" component={Register}/>
                <AppStack.Screen name ="Forgot" component={Forgot}/>
                <AppStack.Screen name="Feed" component={Feed} />

                {/* Telas Paulo C */}
                  
                <AppStack.Screen 
                    name= 'formaPagamento' 
                    component={ formaPagamento }
                    options={{
                        headerStyle: style.header,
                        headerTitleStyle: style.title ,
                        headerTintColor: '#fff' ,
                        headerShown: true,
                        title: 'Forma De Pagamento'
                    }}
                />
                <AppStack.Screen 
                    name= 'adicionarCartao' 
                    component={ adicionarCartao } 
                    options={{
                        headerStyle: style.header,
                        headerTitleStyle: style.title,
                        headerTintColor: '#fff',
                        headerShown: true,
                        title: 'Adicionar Cartão' 
                    }}
                />
                <AppStack.Screen 
                    name= 'editarCartao' 
                    component={ editarCartao } 
                    options={{
                        headerStyle: style.header,
                        headerTitleStyle: style.title,
                        headerTintColor: '#fff',
                        headerShown: true,
                        title: 'Editar Cartão' 
                    }}
                />
                <AppStack.Screen    
                    name= 'pagamento' 
                    component={ pagamento } 
                    options={{
                        headerStyle: style.header,
                        headerTitleStyle: style.title,
                        headerTintColor: '#fff',
                        headerShown: true,
                        title: 'Pagamento' 
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
