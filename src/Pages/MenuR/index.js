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
                    <Text>Resultado</Text>
                    <TouchableOpacity>
                        <Icon name='info' size={28} color='rgba(0, 0, 0, 0.6)' />
                    </TouchableOpacity>
                </View>
                <View style={styles.contBox}>
                    <View style={styles.box}>
                        <Text>Resultado da Área 1</Text>
                        <TouchableOpacity>
                            <Icon name='download' size={24} color='rgba(0, 0, 0, 0.6)' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}