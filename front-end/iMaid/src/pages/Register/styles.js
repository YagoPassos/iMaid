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
        alignContent: "center",
    },
    input: {
        width: WIDTH - 100,
        height: 70,
        backgroundColor: 'rgba(72, 169, 166, 0.85)',
        borderRadius: 15,
        margin: 15,
        marginHorizontal: 5,
        position: "relative",
        fontSize: 16,
        padding: 15,
    },
    inputCT:{ 
        flex:3,
        width: null,
        height: 70,
        backgroundColor: 'rgba(72, 169, 166, 0.85)',
        borderRadius: 15,
        margin: 15,
        marginHorizontal: 5,
        position: "relative",
        fontSize: 16,
        padding: 15,
    },
    inputUf:{ 
        flex:0.5,
        width: null,
        height: 70,
        backgroundColor: 'rgba(72, 169, 166, 0.85)',
        borderRadius: 15,
        margin: 15,
        marginHorizontal: 5,
        position: "relative",
        fontSize: 16,
        padding: 15,
    },
    btn:{
        width: WIDTH - 150,
        height: 70,
        color: "white",
        backgroundColor: 'rgba(3, 25, 38, 1)',
        borderRadius: 15,
        margin: 15,
        textAlign: "center",
        alignContent: "center",
        fontSize: 30,
        lineHeight: 60,
    },
    formContainer: {
        flex: 1,
        width: WIDTH - 30,
        height: HEIGHT - 350,
        // backgroundColor: 'rgba(3, 25, 38,0.85)',
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 60,
        position: "relative",
        marginTop: 50,
    },
    title: {
        fontSize: 55,
        color: 'white',
        padding: 5,
        borderBottomWidth: 0.7,
        borderBottomColor: 'white',
    },
    cityInput:{
        width: WIDTH - 100,
        flexDirection: "row",
    },
    bckBtn:{
        paddingBottom: 10,
    }
})