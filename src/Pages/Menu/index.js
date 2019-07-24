import React, { Component } from 'react';

import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

export default class Menu extends Component{
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image />
                </View>
    
                <Text style={styles.title}>NEXUS</Text>
                
                <View style={styles.form}>
                    <TextInput 
                        placeholder='Nome do Proprietário'
                        style={styles.textInput}
                    ></TextInput>
                    <TextInput 
                        placeholder='Localização'
                        style={styles.textInput}
                    ></TextInput>
                </View>
                <View style={styles.data}>
                    <DatePicker 
                        style={styles.date}
                        mode='date'
                        format='DD-MM-YYYY'
                        customStyles={{
                            dateInput: {
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: 5,
                                
                            }
                        }}
                    />
                </View>
                <View style={styles.ponto}>
                <TextInput 
                    placeholder='Nº de Pontos' 
                    keyboardType='number-pad'
                    style={styles.textInputp}
                ></TextInput>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SubMenu')}>
                        <Text style={styles.textButton}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}