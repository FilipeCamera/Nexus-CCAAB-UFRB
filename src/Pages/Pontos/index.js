import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../Pontos/styles';

export default class Pontos extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrowleft' size={24} color='rgba(0, 0, 0, 1.0)' style={{padding: 5}}/>
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Área 1</Text>
                    <TouchableOpacity>
                        <Icon name='dotchart' size={24} color='rgba(0, 0, 0, 1.0)' style={{padding: 5}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <View style={styles.table}>
                        <Text style={styles.tableTitle}>Ponto 1</Text>
                        <Text style={styles.tableDesc}>Primeira área a ser avaliada.</Text>
                        <TouchableOpacity style={styles.tableBtn} onPress={() => this.props.navigation.navigate('Pesquisa')}>
                            <Text style={styles.btnText}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <Text style={styles.tableTitle}>Ponto 2</Text>
                        <Text style={styles.tableDesc}>Segunda área a ser avaliada.</Text>
                        <TouchableOpacity style={styles.tableBtn}>
                            <Text style={styles.btnText}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <Text style={styles.tableTitle}>Ponto 3</Text>
                        <Text style={styles.tableDesc}>Terceira área a ser avaliada.</Text>
                        <TouchableOpacity style={styles.tableBtn}>
                            <Text style={styles.btnText}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Finalizar/SalvarDados</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}