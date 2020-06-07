import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        alignItems: "center",
      },
      areaItem: {
        width: 340,
        height: 80,
        marginBottom: 20,
        borderBottomWidth: 1,
      },
      areaText: {
        width: '100%',
        height: 20,
      },
      areaServico:{
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'flex-start', 
        alignItems: 'center'
      },
      areaDireita:{
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      areaEsquerda:{
        flex: 1,
        flexDirection: 'row'
      },
      button:{
        height: 40,
        width: 220,
        backgroundColor: '#40E0D0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
      }
})

export default style