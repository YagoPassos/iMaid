import React from 'react';
import { View, Image, Text, TextInput, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'
import bg from '../../images/bg1.jpg'

export default function Forgot() {

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    return (
        <ImageBackground source={bg} style={styles.bgImg}>
            <View style={styles.container}>
                <View style={styles.formContainer}>

                    <Text style={styles.title}>
                        Recuperar Senha!
                       </Text>
                    <Text style={styles.forgotText}>
                        Digite seu email abaixo e em breve estaremos envando uma solicitação para a troca da sua senha.
                </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={' Digite seu email'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity>
                    <Feather
                        onPress={navigateToLogin}
                        style={styles.bckBtn}
                        name="arrow-left"
                        size={45}
                        color="white"
                    />
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}