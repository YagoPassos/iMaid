import React, { Component, useState } from 'react';
import { Text, View, TextInput, Image, StyleSheet, Picker, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { State } from 'react-native-gesture-handler';
import style from './styles'

import axios from 'axios'

axios.get()

// var axios = require('axios')


export default function adicionarCartao(){

    var [numero, setNumero] = useState('...')
    var [vencimento, setVencimento] = useState('MM/AA')
    var [csv, setCsv] = useState('CSV')
    var [dadosPicker, setDadosPicker] = useState([])
    var [pais, setPais] = useState('Brasil')
    var [dono, setDono] = useState('Paulo')
    var [bandeira, setBandeira] = useState('Master')
    
    var [receive, setReceive] = useState(false)
    
    function PegarPaises(){
        fetch('http://192.168.0.104:3001/paises/')
        .then((dados)=> dados.json())
        .then((dados)=> {
            setDadosPicker(dados)
            setReceive(true)
            console.log('Leu os paises...')
        })
    }
    
    

    let item = dadosPicker.map((valor, i)=>{
        return <Picker.Item key={i} label={valor.nome} value={valor.nome} />
    })

    function BotaoCadastrar(){
       
        ///adicionarCartao/:numero/:dataVencimento/:csv/:nomeDono/:bandeira
        //  http://192.168.0.104:3000/cartoes/adicionarCartao/11111111111/2405/426/Paulo/Master
       
        return(
            <View style = {style.viewButton}>
              <TouchableOpacity 
              style = {style.button}
              onPress={ () => {
                var url = `http://192.168.0.104:3001/cartoes/adicionarCartao/${numero}/${vencimento}/${csv}/${dono}/${bandeira}`
                axios.post(url)
                console.log('URL POST: ' + url)
            }}
              >
                <Text style={ style.textoButton }>ADICIONAR CARTÃO</Text>
              </TouchableOpacity>
            
           
            </View>
        )
    }

    if (!receive) PegarPaises()
    
    return(
        <View style={style.conteiner} >
            <View style={style.areaInputNumero}> 
                <View style={style.areaTexto}>
                    <Text style={ style.texto }>Número do cartão</Text>
                </View>
                <View style={style.corpoInput}>
                    <View style={style.areaImg}>
                        <Image
                            style={style.img}
                            source= {require('./../../icones/credit-card.png')}
                        />
                    </View>
                    <View style={style.centro}>
                        <TextInput 
                            style={style.input} 
                            value={numero}
                            onFocus={()=>setNumero('')}
                            onChangeText={ (value)=> setNumero(value) }
                        ></TextInput>
                    </View>
                    <View style={style.areaImg2}>
                        <Image
                            style={style.img2}
                            source= {require('./../../icones/camera.png')}
                        />
                    </View>
                </View>   
            </View>
            <View style={style.areaInputDublo}> 
                <View style={style.corpoInputEsquerda}>
                    <View style={style.areaInput1}>
                        <TextInput 
                            style={style.input} 
                            value={vencimento}
                            onFocus={()=>setVencimento('')}
                            onChangeText={ (value)=> setVencimento(value) }
                        ></TextInput>
                    </View>
                    <View style={style.areaImg3}>
                        <Image
                            style={style.img3}
                            source= {require('./../../icones/interrogacao.png')}
                        />
                    </View>
                </View>
                <View style={style.corpoInputDireita}>
                    <View style={style.areaInput2}>
                    <TextInput 
                            style={style.input} 
                            value={csv}
                            onFocus={()=>setCsv('')}
                            onChangeText={ (value)=> setCsv(value) }
                        ></TextInput>
                    </View>
                    <View style={style.areaImg3}>
                        <Image
                            style={style.img3}
                            source= {require('./../../icones/interrogacao.png')}
                        />
                    </View>
                </View>   
            </View>
            
            <View style={style.pais}>
                <View style={style.areaImgPais}>
                    <Image
                            style={style.imgPais}
                            source= {require('./../../icones/bandeira.png')}
                        />
                    </View>
                <View style={style.areaPicker}>
                    <Picker
                        selectedValue = {pais}
                        style={style.picker}
                        onValueChange={(value, id)=> setPais(value) }
                    >
                        {item}
                    </Picker>
                </View>
            </View>
            
            <BotaoCadastrar/>

            <Text>Implementar uma mascara de strings no input</Text>
            <Text>Arrumar os inputs pro texto não sumir quando não digitar nada</Text>
            <Text>Exibir modal quando apertar na interrogação</Text>
            <Text>Fazer validação de strings no adicionarCartao</Text>
            
            

        </View>
    )
}

