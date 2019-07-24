import React, { Component } from 'react';

import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

export default class Menu extends Component{
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput 
                    placeholder='Nome do Proprietário'
                    style={styles.textInput}
                ></TextInput>
                <TextInput 
                    placeholder='Localização'
                    style={styles.textInput}
                ></TextInput>
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
                <TextInput 
                    placeholder='Quantidade de Pontos' 
                    keyboardType='number-pad'
                    style={styles.textInputp}
                ></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Começar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}