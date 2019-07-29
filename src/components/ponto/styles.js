import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.4)'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    box: {
        padding: 5,
    },
    table: {
        margin: 5,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 5,
    },
    tableTitle: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    tableDesc: {
        padding: 5,
        fontSize: 16,
        
    },
    tableBtn: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 1.0)',
    },
    
})

export default styles;