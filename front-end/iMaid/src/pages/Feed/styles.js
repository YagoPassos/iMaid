import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    anuncioList: {
        marginTop: 32,
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

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    menuButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});