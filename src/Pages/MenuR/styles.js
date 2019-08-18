import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.6)'
    },
    form: {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contBox: {
        margin: 10,
    },
    box: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'space-between' 
    },
    boxin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
    },
    button: {
        backgroundColor: 'rgba(12, 212, 0, 0.9)',
        height: 50,
        width: Dimensions.get('window').width - 20,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    posButton: {
        position: 'absolute',
        marginTop: Dimensions.get('window').height - 100,
    },
    txtButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default styles;