import { StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants'

const { width: WIDTH} = Dimensions.get('window')
const { height: HEIGHT} = Dimensions.get('window')


export default StyleSheet.create({
    bgImg: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1,
        width: null,
        height: null,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: 'rgba(3, 25, 38, 0.70)',
        justifyContent:"center",
        alignItems: "center",
    },
    input: {
        width: WIDTH - 30,
        height: 70,
        backgroundColor: 'rgba(72, 169, 166, 0.85)',
        borderRadius: 15,
        margin: 15,
        marginHorizontal: 5,
        position: "relative",
        fontSize: 16,
        padding: 15,
    },
    formContainer: {
        width: WIDTH - 30,
        height: HEIGHT - 350,
        // backgroundColor: 'rgba(3, 25, 38,0.85)',
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 60,
        position: "relative",
    },
    title: {
        fontSize: 45,
        color: 'white',
        padding: 5,
        borderBottomWidth: 0.7,
        borderBottomColor: 'white',
        position: 'absolute',
        top: 0,
    },
    bckBtn:{
        marginTop: 200,
        marginRight: 300,
    },
    forgotText:{ 
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },

    

})