import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9e9e9',
        paddingTop: 8,
        alignItems: "center",
      },
      areaDetalhesPedido: {
        width: 345,
        height: 140,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 0
      },
      areaText: {
        width: '100%',
        height: 40,
        justifyContent: "center",
        marginLeft: 20
      },
      areaEsquerda:{
        height: '100%',
        width: '70%',
        justifyContent: 'center'
        
      },
      areaDireita:{
        height: '100%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      areaServico:{
        flex: 1,
        flexDirection: 'row'
      },
      button:{
        height: 40,
        width: 345,
        backgroundColor: '#40E0D0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
      },
      textoTitulo:{
        fontSize: 15,
        fontWeight: 'bold'
      },
      textoSubtitulo:{
        fontSize: 12,
      },
      textoButton:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
      },
      areaResumo: {
        width: 345,
        height: 80,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 0
      },
      areaValorTotal:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000'
      },
      textoValor:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 20,
      },
      valor:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
      },
      areaEndereco:{
        width: 345,
        height: 90,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 0
      },
      Text:{
        color: '#909090',
        marginLeft: 20,
      },
      areaMetodoPagamento: {
        width: 345,
        height: 90,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 0
      },
})

export default style