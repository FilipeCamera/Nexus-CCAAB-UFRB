import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    activy: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    boxtitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 5,
        borderBottomColor: 'rgba(0, 0, 0, 0.9)'
    },
    txttitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    box: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    box2: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center'
    },
    checkbox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    nota: {
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtNota: {
        fontSize: 16,
    },
    num: {
        fontSize: 18,
        marginLeft: -10,
        paddingRight: 10
    },
    boxbtn: {
        marginBottom: 40,
    },
    btn: {
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(12, 212, 0, 0.9)',
        marginTop: 10,
        justifyContent: 'center'
    },
    txtbtn: {
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1.0)'
    }
})

export default styles;