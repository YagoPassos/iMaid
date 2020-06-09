import React, { useState, useEffect } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Text, Image, TouchableOpacity, Linking } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Feed() {
    // os estados
    const [anuncios, setAnuncios] = useState([]);

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToAnuncio(anuncio) {
        navigation.navigate('Anuncio', { anuncio });
    }

    async function loadAnuncios() {
        if (loading) {
            return;
        }

        setLoading(true);

        const response = await api.get('anuncios', {
        });

        setAnuncios([...anuncios, ...response.data]);
        setLoading(false);
    }

    // É uma função que será disparada quando as variáveis do array mudarem.
    useEffect(() => {
        loadAnuncios();
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress={() => navigateToAnuncio(anuncio)}
                >
                    <AntDesign name="home" size={48} color="#737380" />
                </TouchableOpacity>

            </View>

            <FlatList 
                data={anuncios}
                style={styles.anuncioList}
                keyExtractor={anuncio => String(anuncio.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadAnuncios}
                onEndReachedThreshold={0.2}
                renderItem={({ item: anuncio }) => (
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

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToAnuncio(anuncio)}
                        >
                            <Text style={styles.detailsButtonText}>Ir para o anúncio</Text>
                            <Feather name="arrow-right" size={16} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}