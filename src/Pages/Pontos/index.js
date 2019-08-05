import React, { Component } from 'react';

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import update from 'immutability-helper';
import styles from '../Pontos/styles';
import Ponto from '../../components/ponto';

export default class Pontos extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state= {
            pontos: this.props.navigation.state.params.result.pontos,
            id: this.props.navigation.state.params.result.id,
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrowleft' size={24} color='rgba(0, 0, 0, 1.0)' style={{padding: 5}}/>
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Área {this.state.id}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('GraficoA', {result: this.state})}>
                        <Icon name='dotchart' size={24} color='rgba(0, 0, 0, 1.0)' style={{padding: 5}}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Ponto params={this.state} navigation={this.props.navigation}/>
                </ScrollView>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Finalizar/SalvarDados</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}