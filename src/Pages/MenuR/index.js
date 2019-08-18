import React, { Component } from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles'

export default class MenuR extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrowleft' size={28} color='rgba(0, 0, 0, 0.6)'/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Resultado</Text>
                    <TouchableOpacity>
                        <Icon name='info' size={28} color='rgba(0, 0, 0, 0.6)' />
                    </TouchableOpacity>
                </View>
                <View style={styles.form}>
                    <Text style={styles.text}>Proprietário: {this.props.navigation.state.params.result.nome}</Text>
                    <Text style={styles.text}>Localização: {this.props.navigation.state.params.result.localizacao}</Text>
                    <Text style={styles.text}>Data: {this.props.navigation.state.params.result.data}</Text>
                    <Text style={styles.text2}>Nº Pontos: {this.props.navigation.state.params.result.pontos}</Text>
                </View>
                <View style={styles.contBox}>
                    <View style={styles.box}>
                        <View style={styles.boxin}>
                            <Text style={styles.text}>Resultado da Área 1</Text>
                            <TouchableOpacity>
                                <Icon name='download' size={24} color='rgba(0, 0, 0, 0.6)' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxin}>
                            <Text style={styles.text}>Resultado da Área 2</Text>
                            <TouchableOpacity>
                                <Icon name='download' size={24} color='rgba(0, 0, 0, 0.6)' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxin}>
                            <Text style={styles.text}>Resultado da Área 3</Text>
                            <TouchableOpacity>
                                <Icon name='download' size={24} color='rgba(0, 0, 0, 0.6)' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxin}>
                            <Text style={styles.text}>Resultado da Área 4</Text>
                            <TouchableOpacity>
                                <Icon name='download' size={24} color='rgba(0, 0, 0, 0.6)' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.posButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtButton}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}