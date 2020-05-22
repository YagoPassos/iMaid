import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    areaInputNumero: {
        height: 70,
        width: 340,
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    areaTexto: {
        height: 20,
        width: 340,
    },
    corpoInput:{
        height: 30,
        width: 340,
        flexDirection: 'row'
    },
    areaImg:{
        height: 45,
        width: 30,
        justifyContent: "center",
        alignItems: 'flex-start',
    },
    areaImg2:{
        height: 45,
        width: 30,
        justifyContent: "center",
        alignItems: 'flex-end',
    },
    centro:{
        height: 30,
        width: 280,
        justifyContent: 'center',
        marginTop: 6
    }, 
    img: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    img2: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    input:{
        height: 50,
        width: 240,
    },
    texto:{
        color: '#808080',
        fontWeight: 'bold'
    },
    areaInputDublo:{
        marginTop: 10,
        height: 50,
        width: 340,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    corpoInputEsquerda:{
        width: 150,
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#808080'
    },
    corpoInputDireita:{
        width: 150,
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#808080'
    },
    areaImg3:{
        width: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaInput1:{
        height: 50,
        width: 120,
    },
    img3:{
        width: 15,
        height: 15,
        marginLeft: 0
    },
    areaInput2:{
        height: 50,
        width: 120,
    },
    areaPicker:{
        height: 20,
        width: 120
    },
    picker:{
            height: 50,
            width: 318
    }, 
    pais:{
        marginTop: 10,
        height: 50,
        width: 340,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    areaImgPais:{
        width: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgPais:{
        width: 15,
        height: 15,
    },
    button:{
        backgroundColor: '#40E0D0',
        height: 40,
        width: 280,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      viewButton:{
        marginTop: 350,
        position: 'absolute',
        marginTop: 500
      },
      textoButton:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
      }
})

export default styles