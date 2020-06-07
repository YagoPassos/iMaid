import React, { Component, useState } from 'react';
import { Text, View, TextInput, Image, StyleSheet, Picker, TouchableOpacity, Modal} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import style from './styles'


import axios from 'axios'

//globalThis.metodoPagamento = "Dinheiro"
// var axios = require('axios')


export default function pagamento(){
    var [metodoPagamento, setmetodoPagamento] = useState('Dinheiro')
    var [receive, setReceive] = useState(false)

    useFocusEffect(
        React.useCallback(()=>{
            if(!receive){
                setmetodoPagamento(globalThis.metodoPagamento)   
                setReceive(true)
            }
        })
    )

    function GoToFormaPagamento(){
        const navigation = useNavigation()
        
        return(
            <TouchableOpacity onPress={()=> {
                navigation.navigate('formaPagamento')
                setReceive(false)
            }}>
                
                <Text>ALTERAR</Text>
                </TouchableOpacity>
        )
    }

    function Sevicos(props){
        // Função map pra mapear os serviços escolhidos
        return(                
                <View style={style.areaEsquerda}>
                    <View style={style.areaServico}>
                        <Text>Diarista (Limpeza completa)</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <Text>R$ 52,99</Text>
                    </View>
                </View>
        )
    }

    return(
        <View style={style.container}>

        
            <View style={style.areaItem}>
                <View style={style.areaText}>
                    <Text>Serviços escolhidos...</Text>
                </View>
                {/* Cada Serviço escolhido será renderizado aqui */}
                <Sevicos />
            </View>

            <View style={style.areaItem}>
                <View style={style.areaText}>
                    <Text>Forma de pagamento</Text>
                </View>
                <View style={style.areaEsquerda}>
                    <View style={style.areaServico}>
                        <Text>{metodoPagamento? metodoPagamento : 'Dinheiro'}</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <GoToFormaPagamento/>
                    </View>
                </View>
            </View>

            <View style={style.areaItem}>
                <View style={style.areaText}>
                    <Text>Endereço do cliente</Text>
                </View>
                <View style={style.areaEsquerda}>
                    <View style={style.areaServico}>
                        <Text>Rua Dr. Clodoaldo Avelino N° 680</Text>
                        <Text>Cidade/Estado/Bairro</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <TouchableOpacity>
                            <Text>ALTERAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 

            <View style={style.areaItem}>
                <View style={style.areaText}>
                    <Text>Resumo</Text>
                </View>
                <View style={style.areaEsquerda}>
                    <View style={style.areaServico}>
                        <Text>Valor Total</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <TouchableOpacity>
                            <Text>R$ 56,99</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Text>metodoSelecionado = {metodoPagamento}</Text>

                    <TouchableOpacity style={style.button} onPress={()=> alert('Pagamento efetuado!')}>
                        <Text>Botão de confirmar</Text>
                    </TouchableOpacity>


        </View>
    )
}