import React, { Component } from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles'

export default class SubMenu extends Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titulo}>Nexus</Text>
                </View>
                <View style={styles.formulario}>
                    <Text style={styles.text}>Nome: </Text>
                    <Text style={styles.text}>Localização: </Text>
                    <Text style={styles.text}>Data: </Text>
                    <Text style={styles.text}>Nº de Pontos: </Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos')}>
                        <Text style={styles.txtbutton}>Área 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos')}>
                        <Text style={styles.txtbutton}>Área 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos')}>
                        <Text style={styles.txtbutton}>Área 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos')}>
                        <Text style={styles.txtbutton}>Área 4</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.txtbutton2}>Finalizar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.txtbutton2}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}