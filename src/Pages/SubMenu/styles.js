import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
    },
    title: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.4)'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
    },
    formulario: {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.4)'
    },
    btn: {
        //marginTop: 5,
        alignItems: 'center'
    },
    text: {
        marginBottom: 5,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    button: {
        width: 350,
        height: 60,
        backgroundColor: 'rgba(0, 0, 255, 0.7)',
        borderRadius: 5,
        marginTop: 5,
        justifyContent: 'center'
    },
    txtbutton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1.0)'
    },
    button2: {
        width: width,
        height: 50,
        backgroundColor: 'rgba(12, 212, 0, 0.9)',
        //borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center'
    },
    button3: {
        width: width,
        height: 50,
        backgroundColor: 'rgba(255, 34, 0, 0.9)',
        //borderRadius: 5,
        marginTop: 5,
        justifyContent: 'center'
    },
    txtbutton2: {
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1.0)'
    }
})

export default styles;