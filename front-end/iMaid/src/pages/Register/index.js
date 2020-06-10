import React, { useState } from 'react';
import { View, Image, Text, TextInput, Dimensions, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import { validateAll } from 'indicative/validator';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';


import styles from './styles'
import bg from '../../images/bg1.jpg'

export default function Register() {

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const [erro, setErro] = useState('');


    const data = {
        user,
        password,
        password_confirmation,
        email,
        city,
        uf
    }

    async function registerUser(data) {

        const rules = {
            user: 'required|alpha_numeric',
            password: 'required|min:8|confirmed',
            email: 'required|email',
            city: 'required|alpha',
            uf: 'required|string|max:2'
        }

        const message = {
            required: (field) => `${field} is required`,
            'password.min': 'A senha é muito curta',
            'password.confirmed': 'As senhas não coincidem',
            'email.email': 'Esse não é um email válido',
            'user.alpha_numeric': 'O usuário contêm caracteres não permitidos',
            'cidade.alpha': 'Cidade não pode conter números',
            'uf.string': 'Uf não pode conter números',
            'user.required': 'O usuário é obrigatório',
            'password.required': 'A senha é obrigatória',
            'email.required': 'O email é obrigatório',
            'cidade.required': 'A cidade é obrigatória',
            'uf.required': 'A UF é obrigatória',
            'uf.max': 'Maximo de duas letras para a UF',
        }

        console.log(data)
        try {
            await validateAll(data, rules, message)

            const response = await api.post('register', data);

            Alert.alert("Cadastro realizado com sucesso!", "Confirmar cadastro?", [{text: 'Sim', onPress: ()=> console.log('alert closed')}]);

            await navigateToLogin();

        } catch (err) {
            if (err[0] != undefined) {
                setErro(err[0].message);
                console.log(erro);
                console.log(err);
            }
        }

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
                    <TextInput
                        style={styles.input}
                        placeholder={' Confirmar Senha'}
                        secureTextEntry
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid='transparent'
                        value={password_confirmation}
                        onChangeText={password_confirmation => setPassword_confirmation(password_confirmation)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={' Email'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid='transparent'
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    <View style={styles.cityInput}>
                        <TextInput
                            style={styles.inputCT}
                            placeholder={' Cidade'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                            value={city}
                            onChangeText={city => setCity(city)}
                        />
                        <TextInput
                            style={styles.inputUf}
                            placeholder={' UF'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                            value={uf}
                            onChangeText={uf => setUf(uf)}
                        />
                    </View>

                    <Text style={styles.err}>
                        {erro}
                    </Text>

                    <TouchableOpacity>
                        <Text
                            style={styles.btn}
                            onPress={() => {registerUser(data)}}
                            onPress={navigateToLogin}
                        >

                            Cadastrar
                        </Text>
                    </TouchableOpacity>
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