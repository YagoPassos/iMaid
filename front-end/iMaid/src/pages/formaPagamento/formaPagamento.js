import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import style from './styles'


export default class formaPagamento extends Component{
    constructor(props){
        super(props)
        this.state = {
        cartoes: [],
        opcaoPagamento: 6,
        tela: 'formaPagamento',
        receive: false,
        modalVisibility: false,
        modalCartao: 6
        }
        this.showModal = this.showModal.bind(this)
        this.pegarDadosBD = this.pegarDadosBD.bind(this)
        this.selecionarRadio = this.selecionarRadio.bind(this) 
      }
    
  pegarDadosBD () {
    fetch('http://192.168.0.104:3001/cartoes/')
    .then(response=> response.json())
    .then(cartoes=> {this.setState({ cartoes: cartoes })})
    console.log('Carregando dados de cartões...')
    this.setState({receive: true})
  }  
  
  selecionarRadio(indice){
    this.setState({opcaoPagamento: indice})
  }
  
  showModal(opcao, id=0,){
    console.log(`Indice: ${id}\nCartao: ${this.state.modalCartao}`)
    if(id !== 6){ //pra não fazer no item dinheiro
      this.setState({modalVisibility: opcao, modalCartao: parseInt(id) })
    }
  }

  RenderizarItens(props){        
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
              {state.opcaoPagamento === props.indice && <View style={ style.radioBola }></View> } 
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.numeroCartao}>
          <Text style={ style.texto }>{props.numeroCartao}</Text> 
        </View>
      </TouchableOpacity>
    );
  }

  
  render(){
    var state = this.state
    let cartoes = this.state.cartoes.map((valor, i)=>(
      <RenderizarItens numeroCartao={valor.numero} bandeira={valor.bandeira} indice={i+1} tipo={'Cartão'}/>
    ))
  
    var selecionarRadio =  this.selecionarRadio 
    var pegarDadosBD = this.pegarDadosBD
    var showModal = this.showModal
    
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
                {state.opcaoPagamento === props.indice && <View style={ style.radioBola }></View> } 
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.numeroCartao}>
            <Text style={ style.texto }>{props.numeroCartao}</Text> 
          </View>
        </TouchableOpacity>
      );
    }

    function AdicionarCartao(){
        const navigation = useNavigation()
        return(
            
            <View style = {style.viewButton}>
              <TouchableOpacity 
              style = {style.button}
              onPress={ ()=> navigation.navigate('Adicionar Cartão')}
              >
                <Text style={ style.textoButton }>ADICIONAR CARTÃO</Text>
              </TouchableOpacity>
            
           
            </View>
        )
    }
    if(!state.receive) pegarDadosBD() // se nunca tiver recebidos os dados, faz a requisição
    return (
      <View style={style.container} > 
        {/* <View style = { styles.cabeçalho }>
          <Text style={ styles.texto }>Forma de Pagamento</Text>
        </View> */} 
        
        
        <View style={ style.telaFuncional }> 
         
         
                     
          {cartoes} 
                     
          <RenderizarItens tipo={'Dinheiro'}  indice={6}/>
                     
          <AdicionarCartao />
        
          <Text>Implementar deletar cartão</Text>
          <Text>Implementar editar cartão</Text>
          <Text>Colocar limite de cartões = 3</Text>
          <Text>Sah pohha</Text>
        
        
        </View>
                  {/* ******** Modal ******** */}
          <Modal              
            animationType={"slide"}
            visible={this.state.modalVisibility}
            transparent={true}
            onRequestClose={()=> showModal(false)}
          >
            <View style={style.viewModal}>
              <View style={style.modalInside}>
                <Text style={style}>Cartão {this.state.modalCartao}</Text>
                <View style={{flexDirection: "row"}}>  Precisa implementar as devidas OnPress */}
                  <TouchableOpacity style={style.button} onPress={()=> showModal(false)}>
                    <Text style={style.textoButton}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.buttonDeletar} onPress={()=> showModal(false)}>
                    <Text style={style.textoButton}>deletar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          
      </View>
    );
  }
}



