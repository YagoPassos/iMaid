import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function index(){
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title="Go to formaPagamento"
            onPress={() => navigation.navigate('Forma De Pagamento')}
            />
        </View>
    )
}
    

    
    


    
