import React from 'react';
import { View, Image, Text, TextInput, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import bg from '../../images/bg1.jpg'

export default function Login() {

    const navigation = useNavigation();

    function navigateToRegister() {
        navigation.navigate('Register')
    }
    function navigateToForgot() {
        navigation.navigate('Forgot')
    }

    return (
        <ImageBackground source={bg} style={styles.bgImg}>
            <View style={styles.container}>
                <View style={styles.formContainer}>

                    <Text style={styles.title}>
                        Login
                       </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={' Usuário'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={' Senha'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity>
                        <Text style={styles.btn}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.btButtons}>
                        <TouchableOpacity
                            onPress={navigateToRegister}
                        >
                            <Text style={styles.register}>Não tem conta ? Cadastre-se!</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={navigateToForgot}
                        >
                            <Text style={styles.register}>Esqueceu a senha ?</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}