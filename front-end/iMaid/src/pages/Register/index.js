import React from 'react';
import { View, Image, Text, TextInput, Dimensions, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import bg from '../../images/bg1.jpg'

export default function Register() {

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    return (
        <ImageBackground source={bg} style={styles.bgImg}>
            <View style={styles.container}>
                <View style={styles.formContainer}>

                    <Text style={styles.title}>
                        Register
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
                    <TextInput
                        style={styles.input}
                        placeholder={' Email'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid='transparent'
                    />
                    <View style={styles.cityInput}>
                        <TextInput
                            style={styles.inputCT}
                            placeholder={' Cidade'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                        />
                        <TextInput
                            style={styles.inputUf}
                            placeholder={' UF'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <TouchableOpacity>
                        <Text
                        onPress = {navigateToLogin}
                        style={styles.btn}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Feather
                        onPress = {navigateToLogin}
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