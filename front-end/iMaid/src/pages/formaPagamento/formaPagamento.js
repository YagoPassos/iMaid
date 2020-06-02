import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import style from './styles'
import axios from 'axios'
// const navigation = useNavigation()


export default class formaPagamento extends Component{
    constructor(props){
        super(props)
        this.state = {
        ip : '192.168.0.104', // ip para requisições
        cartoes: [],
        opcaoPagamento: 6,
        tela: 'formaPagamento',
        receive: false,
        modalVisibility: false,
        modalVisibilityConfirmar: false,
        idCartãoSelecionado: {_id: null, id: 6} // _id é o id do cartão no mongoDB, id é apenas o numero do cartão a ser imprimido no modal
        }

        this.showModal = this.showModal.bind(this)
        this.showModalConfirmar = this.showModalConfirmar.bind(this)
        this.pegarDadosBD = this.pegarDadosBD.bind(this)
        this.selecionarRadio = this.selecionarRadio.bind(this) 
        this.deletar = this.deletar.bind(this)
        this.editar = this.editar.bind(this) 
      }
    
      
  async pegarDadosBD () {
    //http://192.168.0.104:3001/cartoes/
    var url = `http://${this.state.ip}:3001/cartoes/`
    await fetch(url)
    .then(response=> response.json())
    .then(cartoes=> {this.setState({ cartoes: cartoes.doc })})
    console.log('Carregando dados de cartões...')
    console.log('URL: ' + url)
    this.setState({receive: true})
  }  
  
  selecionarRadio(indice){
    this.setState({opcaoPagamento: indice})
  }
  
  showModal(opcao, id=6,){
    if(id !== 6){ //pra não fazer no item dinheiro
      id -= 1
      this.setState({modalVisibility: opcao, idCartãoSelecionado: {_id: this.state.cartoes[id]['_id'], id: parseInt(id)+1 }})
    }
    else if(!opcao) this.setState({modalVisibility: opcao}) // Apenas pra sair, sem modificar o idCartaoSelecionado
    
  }
  showModalConfirmar(opcao,){
    this.setState({modalVisibilityConfirmar: opcao}) 
  }

  // cartão para testes
  // http://192.168.0.104:3001/cartoes/adicionarCartao/1111 1111 1111 111/27/19/819/Paulo/Outra
  async deletar(){
    let uri = `http://${this.state.ip}:3001/cartoes/apagar/${this.state.idCartãoSelecionado._id}`
    console.log('Url: ' + uri)
    await axios.delete(uri)
    let vet = this.state.cartoes
    let item = vet.pop(vet.length) //Remove o ultimo elemento
    this.setState({cartoes: vet}) // atualiza o estado
  }

  async editar(navigation){
    this.setState({modalVisibility: false})
    navigation.navigate('editarCartao', {_id:this.state.idCartãoSelecionado._id})
    // Navega para a page editarCartao e passa o id do cartão selecionado para ele 
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
    var showModalConfirmar = this.showModalConfirmar
    var editar = this.editar
    var deletar = this.deletar
    
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
              style = {style.buttonEditar}
              onPress={ ()=> navigation.navigate('adicionarCartao')}
              >
                <Text style={ style.textoButton }>ADICIONAR CARTÃO</Text>
              </TouchableOpacity>
            
           
            </View>
        )
    }

    function ModalOpcoes(){
      const navigation = useNavigation()
      return(
        <Modal              
            animationType={"slide"}
            visible={state.modalVisibility}
            transparent={true}
            onRequestClose={()=> showModal(false)}
          >
            <View style={style.viewModal}>
              <View style={style.modalInside}>
                <Text style={style.textoModal}>Cartão {state.idCartãoSelecionado.id}</Text>
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
      const navigation = useNavigation()
      return(
        <Modal              
            animationType={"slide"}
            visible={state.modalVisibilityConfirmar}
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
          
          <Text>Criar uma função para atualizar o status de cartões ao retornar da pagina adicionarCartao</Text>
          <Text>Colocal uma confirmação ao deletar/editar</Text>
          <Text>Implementar editar cartão</Text>
          <Text>Colocar limite de cartões = 3</Text>
        
        
        </View>
                  {/* ******** Modal ******** */}
        <ModalOpcoes/>
        <ModalConfirmar/>  
      </View>
    );
  }
}



