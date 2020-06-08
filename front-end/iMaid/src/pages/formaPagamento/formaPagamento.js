import React, { Component, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import style from './styles'
import axios from 'axios'
// const navigation = useNavigation()


export default function formaPagamento (props, {routes}){
      var [cartoes, setCartoes] = useState([])
      var [opcaoPagamento, setOpcaoPagamento] = useState(null)
      var [modalVisibility, setModalVisibility] = useState(false)
      var [modalVisibilityConfirmar, setModalVisibilityConfirmar] = useState(false)
      var [idCartãoSelecionado, setIdCartaoSelecionado] = useState({_id: null, id: 6}) // _id é o id do cartão no mongoDB, id é apenas o numero do cartão a ser imprimido no modal
      var [receive, setReceive] = useState(false)
      const navigation = useNavigation()
      
      // useEffect(
      //   React.useCallback(()=>{
      //     pegarDadosBD()
      //     console.log('Carregando dados de cartões...')
      //     setReceive(true)
      //   }), [receive]
      // )

      useFocusEffect(
        React.useCallback(()=>{
          if(!receive){
            pegarDadosBD()
            setReceive(true)
          }
        })
      )
     
  function pegarDadosBD () {
    //http://192.168.0.104:${globalThis.porta}/cartoes/
    var url = `http://${globalThis.ip}:${globalThis.porta}/cartoes/`
    //console.log('URL: ' + url)
    fetch(url)
    .then(response=> response.json())
    .then(cartoes=> {setCartoes(cartoes.doc )})
    
  }  

  
  
  function selecionarRadio(indice){
    setOpcaoPagamento(indice)
    globalThis.metodoPagamento = (indice!==6 ? cartoes[indice-1]['numero'] : 'Dinheiro'  )
    // Recebe o id do cartão selecionado, se o indice for 6 recebe 'Dinheiro'
  }
  
  function showModal(opcao, id=6,){
    if(id !== 6){ //pra não fazer no item dinheiro
      id -= 1
      setModalVisibility( opcao)
      setIdCartaoSelecionado({_id: cartoes[id]['_id'], id: parseInt(id)+1 }) 
      //idCartãoSelecionado: {_id: cartoes[id]['_id'], id: parseInt(id)+1 }})
    }
    else if(!opcao) setModalVisibility(opcao) // Apenas pra sair, sem modificar o idCartaoSelecionado
    
  }
  
  function showModalConfirmar(opcao,){
    setModalVisibilityConfirmar(opcao) 
  }

  // cartão para testes
  // http://192.168.0.104:${globalThis.porta}/cartoes/adicionarCartao/1111 1111 1111 111/27/19/819/Paulo/Outra
  function deletar(){
    let uri = `http://${globalThis.ip}:${globalThis.porta}/cartoes/apagar/${idCartãoSelecionado._id}`
    console.log('Url: ' + uri)
    axios.delete(uri)
    let vet = cartoes
    let item = vet.pop(vet.length) //Remove o ultimo elemento
    setCartoes(vet) // atualiza o estado
  }

  function editar(navigation){
    setModalVisibility( false )
    navigation.navigate('editarCartao', {_id:idCartãoSelecionado._id})
    // Navega para a page editarCartao e passa o id do cartão selecionado para ele 
  }

  function RenderizarItens(props){        
    return(
      <TouchableOpacity 
      activeOpacity={0.7}
      style={style.item}
      onLongPress={()=>showModal(true, props.indice)}
      > 
        <View style={style.areaInfoCartao}>
          <View style={style.icone}>
            <Image
              style={style.img}
              source = {
                props.tipo === 'Dinheiro'? require('./../../icones/dinheiro.png') : 
                props.bandeira === 'MasterCard'? require('./../../icones/mastercard.png') :
                props.bandeira === 'Visa'? require('./../../icones/visa.png') :  require('./../../icones/credit-card.png')
              }
            />
          </View>
          <View style={style.infoCartoes}>
            <Text style={ style.textoNomeMetodoPagamento }>{props.tipo} {props.indice !== 6 ? props.indice : ''}</Text>
            <Text style={ style.texto }>{props.bandeira}</Text>
          </View>
          <View style={style.radio}>
            <TouchableOpacity 
            style={ style.radioCirculo }
            onPress={()=> selecionarRadio(props.indice) }
            > 
              {opcaoPagamento === props.indice && <View style={ style.radioBola }></View> } 
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.numeroCartao}>
          <Text style={ style.texto }>{props.numeroCartao}</Text> 
        </View>
      </TouchableOpacity>
    );
  }
  
  let renderizarCartoes = cartoes.map((valor, i)=>(
    <RenderizarItens numeroCartao={valor.numero} bandeira={valor.bandeira} indice={i+1} tipo={'Cartão'}/>
  ))
  
  
    
    
    function RenderizarItens(props){        
      return(
        <TouchableOpacity 
        activeOpacity={0.7}
        style={style.item}
        onLongPress={()=>showModal(true, props.indice)}
        > 
          <View style={style.areaInfoCartao}>
            <View style={style.icone}>
              <Image
                style={style.img}
                source = {
                  props.tipo === 'Dinheiro'? require('./../../icones/dinheiro.png') : 
                  props.bandeira === 'MasterCard'? require('./../../icones/mastercard.png') :
                  props.bandeira === 'Visa'? require('./../../icones/visa.png') :  require('./../../icones/credit-card.png')
                }
              />
            </View>
            <View style={style.infoCartoes}>
              <Text style={ style.textoNomeMetodoPagamento }>{props.tipo} {props.indice !== 6 ? props.indice : ''}</Text>
              <Text style={ style.texto }>{props.bandeira}</Text>
            </View>
            <View style={style.radio}>
              <TouchableOpacity 
              style={ style.radioCirculo }
              onPress={()=> selecionarRadio(props.indice) }
              > 
                {opcaoPagamento === props.indice && <View style={ style.radioBola }></View> } 
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.numeroCartao}>
            <Text style={ style.texto }>{props.numeroCartao}</Text> 
          </View>
        </TouchableOpacity>
      );
    }


    function ButtonAdicionarCartao(){
        return(
            <View style = {style.viewButton}>
              <TouchableOpacity 
              style = {style.button}
              onPress={ ()=> {
                navigation.navigate('adicionarCartao')
                //pegarDadosBD()
                setReceive(false)
              }}
              >
                <Text style={ style.textoButton }>ADICIONAR CARTÃO</Text>
              </TouchableOpacity>
            </View>
        )
    }

    function ModalOpcoes(){
      return(
        <Modal              
            animationType={"slide"}
            visible={modalVisibility}
            transparent={true}
            onRequestClose={()=> showModal(false)}
          >
            <View style={style.viewModal}>
              <View style={style.modalInside}>
                <Text style={style.textoModal}>Cartão {idCartãoSelecionado.id}</Text>
                <View style={{flexDirection: "row"}}>  
                  <TouchableOpacity style={style.buttonEditar} onPress={()=> editar(navigation)}>
                    <Text style={style.textoButton}>EDITAR</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.buttonDeletar} onPress={()=> {
                    showModal(false)
                    showModalConfirmar(true)
                  }}>
                    <Text style={style.textoButton}>DELETAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
      )
    }

    function confirmar(){
      deletar()
      showModalConfirmar(false)
    }

  function ModalConfirmar(){
      return(
        <Modal              
            animationType={"slide"}
            visible={modalVisibilityConfirmar}
            transparent={true}
            onRequestClose={()=> setModalVisibility(false)}
          >
            <View style={style.viewModal}>
              <View style={style.modalInside}>
              <Text style={style.textoModal}>Deseja confirmar a ação?</Text>
                <View style={{flexDirection: "row"}}>  
                  <TouchableOpacity onPress={()=> showModalConfirmar(false)} style={style.buttonCancelar} >
                    <Text style={style.textoButton}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> confirmar()} style={style.buttonConfirmar} >
                    <Text style={style.textoButton}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
      )
    }

    console.disableYellowBox = true // Desabilita as Warnings

    return (
      <View style={style.container} > 
        {/* <View style = { styles.cabeçalho }>
          <Text style={ styles.texto }>Forma de Pagamento</Text>
        </View> */} 
        
        
        <View style={ style.telaFuncional }> 
         
         
                     
          {renderizarCartoes} 
                     
          <RenderizarItens tipo={'Dinheiro'}  indice={6}/>
                     
          <ButtonAdicionarCartao />
          
        
        
        </View>
                  {/* ******** Modal ******** */}
        <ModalOpcoes/>
        <ModalConfirmar/>  
      </View>
    );
}



