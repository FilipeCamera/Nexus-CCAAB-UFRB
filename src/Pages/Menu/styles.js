import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(232, 184, 0, 0.6)',
        alignItems: 'center',
    },
    logo: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: 'rgba( 255, 255, 255, 1.0)',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        color: 'rgba(0, 0, 0, 0.6)'
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        width: 350,
        fontSize: 18
    },
    textInputp: {
        //backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 5,
        width: 150,
        textAlign: 'center',
        fontSize: 18
    },
    date: {
        width: width/2,
    },
    button: {
        width: 350,
        height: 60,
        backgroundColor: 'rgba(12, 212, 0, 0.9)',
        borderRadius: 5,
        justifyContent: 'center'
    },
    textButton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
    form: {
        marginTop: 20,
    },
    data: {
        marginTop: 20,
    },
    ponto: {
        marginTop: 20,
    },
    btn: {
        marginTop: 10,
    }
})

export default styles;