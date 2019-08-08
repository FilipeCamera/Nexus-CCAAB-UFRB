import React, { Component } from 'react';

import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
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
            p: 0,
        }
    }
    componentDidMount(){
        Alert.alert('Clique duas vezes no botão Iniciar para começar!')
    }
    muda = valor => (
        this.setState({p: valor})
    )
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
                    <Ponto muda={this.muda} params={this.state} navigation={this.props.navigation}/>
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