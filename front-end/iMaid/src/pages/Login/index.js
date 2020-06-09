import React, { useState } from 'react';
import { View, Image, Text, TextInput, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import bg from '../../images/bg1.jpg'
import api from '../../services/api';

export default function Login() {

    const navigation = useNavigation();

    function navigateToRegister() {
        navigation.navigate('Register')
    }
    function navigateToForgot() {
        navigation.navigate('Forgot')
    }

    function navigateToFeed() {
        navigation.navigate('Feed')
    }

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    async function loginSystem() {
        const response = await api.get('register').then(resp => {
            console.log(resp.data);
        });
        console.log(response);
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
                        value={user}
                        onChangeText={user => setUser(user)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={' Senha'}
                        secureTextEntry
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid='transparent'
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                    <TouchableOpacity>
                        <Text
                            style={styles.btn}
                            onPress={{ navigateToFeed }}
                        >
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.btButtons}>
                        <TouchableOpacity
                            onPress={navigateToRegister}
                        >
                            <Text style={styles.register}>Não tem conta ? Cadastre-se!</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={loginSystem(), navigateToForgot}
                        >
                            <Text style={styles.register}>Esqueceu a senha ?</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}