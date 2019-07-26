import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    }
})

export default styles;