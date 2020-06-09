import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

// No incidentProperty, ao invés de um objeto, foi passado um array de objetos para anexar estilizações. 
// O objetivo foi usado para mudar o marginTop do styles que ficou bugado. Passando duas estilizações para a mesma tag.
export default function Anuncio() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const anuncio = route.params.anuncio;
    const message = `Olá, vi seu anúncio: ${anuncio.titulo} e gostaria de contratar o serviço, o valor acordado é de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(anuncio.valor)}.`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Anuncio: ${anuncio.titulo}`,
            recipients: ['daniel.fer.ss@hotmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5571988173831&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#4ecac2" />
                </TouchableOpacity>
            </View>

            <View style={styles.anuncio}>
                <Text style={styles.anuncioProperty}>TÍTULO DO ANÚNCIO:</Text>
                <Text style={styles.anuncioValue}>{anuncio.titulo}</Text>

                <Text style={styles.anuncioProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.anuncioValue}>{anuncio.anuncio}</Text>

                <Text style={styles.anuncioProperty}>VALOR:</Text>
                <Text style={styles.anuncioValue}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(anuncio.valor)}
                </Text>

                <Text style={styles.anuncioProperty}>Registro:</Text>
                <Text style={styles.anuncioValue}>{anuncio.registro}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contatoDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}