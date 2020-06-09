import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      alignItems: "center",
      justifyContent: 'center'
    },
    cabeçalho:{
      height: 35,
      backgroundColor: '#40e0D0',
      alignItems: "center",
      justifyContent: 'center'
    },
    telaFuncional:{
      flex:1,
      alignItems: 'center',
    },
    item:{
      height: 100,
      width: 360,
      alignItems: "center",
      paddingTop: 10,
    },
    icone:{
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    img:{
      height: 50,
      width: 50,
      borderRadius: 30
    },
    infoCartoes:{
      width: 240, 
      height: 50,
      paddingLeft: 10
    },
    areaInfoCartao:{
      width: 340,
      height: 50,
      flexDirection: 'row'
    },
    numeroCartao:{
      width: 340,
      height: 30,
    }, 
    radio:{
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
    }, 
    button:{
      backgroundColor: '#40E0D0',
      height: 40,
      width: 280,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonEditar:{
      backgroundColor: '#40E0D0',
      height: 40,
      width: 150,
      borderRadius: 9,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonDeletar:{
      backgroundColor: '#ff0000',
      height: 40,
      width: 150,
      borderRadius: 9,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 8
    },
    viewButton:{
      position: 'absolute',
      marginTop: 500
    },
    texto:{
      fontSize: 15,
      color: '#808080'
    },
    textoNomeMetodoPagamento:{
      fontSize: 15,
      color: '#000',
    },
    textoButton:{
      fontSize: 15,
      color: '#fff',
      fontWeight:'bold'
    },
    radioCirculo:{
      height: 25,
      width: 25,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#bdbebd',
      alignItems: 'center',
      justifyContent: 'center'
    },
    radioBola:{
      height: 15,
      width: 15,
      borderRadius: 100,
      backgroundColor: '#40E0D0'
    },
    modalInside:{
      backgroundColor:'#fff',
      alignItems:"center",
      justifyContent: "center",
      height: 200,
      width: '90%',
      borderRadius: 15,
      
    },  
    viewModal:{
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: (255,255,255, 100)
      
    },
    textoModal:{
      color: '#000',
      fontSize: 20,
      textShadowColor:"#000",
      paddingBottom: 25
    },
    buttonConfirmar:{
      backgroundColor: '#40E0D0',
      height: 40,
      width: 150,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 8
    },
    buttonCancelar:{
      backgroundColor: '#ff0000',
      height: 40,
      width: 150,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
export default styles

