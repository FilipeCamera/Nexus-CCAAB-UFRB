import React, { Component } from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles'


export default class SubMenu extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            pontos: this.props.navigation.state.params.result.pontos,
            id: 0,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titulo}>Nexus</Text>
                </View>
                <View style={styles.formulario}>
                    <Text style={styles.text}>Nome: { this.props.navigation.state.params.result.nome }</Text>
                    <Text style={styles.text}>Localização: { this.props.navigation.state.params.result.localizacao }</Text>
                    <Text style={styles.text}>Data: { this.props.navigation.state.params.result.data }</Text>
                    <Text style={styles.text}>Pontos: { this.state.pontos }</Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos', {result: this.state})} onPressIn={() => this.setState({id: 1})}>
                        <Text style={styles.txtbutton}>Área 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos', {result: this.state})} onPressIn={() => this.setState({id: 2})}>
                        <Text style={styles.txtbutton}>Área 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos', {result: this.state})} onPressIn={() => this.setState({id: 3})}>
                        <Text style={styles.txtbutton}>Área 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pontos', {result: this.state})} onPressIn={() => this.setState({id: 4})}>
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