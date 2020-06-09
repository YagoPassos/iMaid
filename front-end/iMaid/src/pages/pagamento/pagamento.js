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
    var [email, setEmail] = useState('029171053@unifacs.edu.br')
    var [endereço, setEndereço] = useState('Endereço aqui')
    var [numeroPedido, setNumeroPedido] = useState((Math.random()*10000000).toFixed(0))
    var [valor, setValor] = useState('R$ 56,99')
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
                
                <Text style={{fontWeight: 'bold'}} >ALTERAR</Text>
                </TouchableOpacity>
        )
    }

   

    return(
        <View style={style.container}>

        
            <View style={style.areaDetalhesPedido}>
                <View style={style.areaText}>
                    <Text style={style.textoTitulo}>Detalhes do pedido</Text>
                </View>
                <View style={style.areaServico}>
                    <View style={style.areaEsquerda}>
                        <Text style={{ marginLeft: 20,}}>Confirmação enviada para o seu email</Text>
                        <Text style={style.Text}>{email}</Text>
                        <Text style={style.Text}>Numero do pedido</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <Text style={{fontWeight: 'bold', marginTop: 55}} >{numeroPedido}</Text>
                    </View>
                </View>
            </View>

            <View style={style.areaMetodoPagamento}>
                <View style={style.areaText}>
                    <Text style={style.textoTitulo}>Método de pagamento</Text>
                    <Text style={style.textoSubtitulo} >{metodoPagamento=== 'Dinheiro' ? 'Ao final do serviço'  : metodoPagamento == undefined ? '' : metodoPagamento!== 'Dinheiro' ? 'Cartão de credito' : ''}</Text>
                </View>
                <View style={style.areaServico}>
                    <View style={style.areaEsquerda}>
                        <Text style={{marginLeft: 20, color: '#909090'}}>{metodoPagamento !== undefined ? metodoPagamento : 'Escolha o metódo de pagamento ->'}</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <GoToFormaPagamento/>
                    </View>
                </View>
            </View>

            <View style={style.areaEndereco}>
                <View style={style.areaText}>
                    <Text style={style.textoTitulo}>Endereço do cliente</Text>
                </View>
                <View style={style.areaServico}>
                    <View style={style.areaEsquerda}>
                        <Text style={{marginLeft: 20, color: '#909090'}}>{endereço}</Text>
                        <Text style={{marginLeft: 20, color: '#909090'}}>Cidade/Estado/Bairro</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <TouchableOpacity onPress={()=> alert('Método não implementado')} >
                            <Text style={{fontWeight: 'bold'}} >ALTERAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 

            <View style={style.areaResumo}>
                <View style={style.areaText}>
                    <Text style={style.textoTitulo}>Resumo</Text>
                </View>
                <View style={style.areaValorTotal}>
                    <View style={style.areaEsquerda}>
                        <Text style={style.textoValor} >Valor Total</Text>
                    </View>
                    <View style={style.areaDireita}>
                        <TouchableOpacity >
                            <Text style={style.valor}>{valor}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={style.button} onPress={()=> alert('Pagamento efetuado!')}>
                <Text style = { style.textoButton }>CONFIRMAR</Text>
            </TouchableOpacity>

        </View>
    )
}