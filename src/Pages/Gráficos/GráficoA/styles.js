import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 5,
    },
    chart: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
    },
    boxT:{
        padding: 10,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    box: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 5,
    },
    box2: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxtitle: {
        color: 'rgba(0,0,0, 1.0)',
        fontSize: 16,
        fontWeight: 'bold'
    },
    boxdesc: {
        padding: 5,
    },
    text: {
        color: 'rgba(0,0,0, 0.8)',
        fontSize: 14
    },
})

export default styles;