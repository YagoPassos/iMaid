import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 28,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    anuncio: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4ecac2',
        marginBottom: 16,
    },

    anuncioProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    anuncioValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#FFF',
    },

    contactBox: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 8,
    },

    contatoTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    contatoDescription: {
        fontSize: 15,
        color: '#737380',

    },

    actions: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#4ecac2',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
});