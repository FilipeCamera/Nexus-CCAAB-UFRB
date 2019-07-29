import React, { Component } from 'react';

import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

export default class Menu extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            localizacao: '',
            data: '01-01-2018',
            pontos: 0,
        }
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
                        onChangeText={(name) => this.setState({nome: name})}
                        placeholder='Nome do Proprietário'
                        style={styles.textInput}
                    ></TextInput>
                    <TextInput 
                        onChangeText={(location) => this.setState({localizacao: location})}
                        placeholder='Localização'
                        style={styles.textInput}
                    ></TextInput>
                </View>
                <View style={styles.data}>
                    <DatePicker 
                        date={this.state.data}
                        style={styles.date}
                        mode='date'
                        format='DD-MM-YYYY'
                        onDateChange={(date) => {this.setState({data: date})}}
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
                    onChangeText={(ponto) => this.setState({pontos: ponto})}
                    placeholder='Nº de Pontos' 
                    keyboardType='number-pad'
                    style={styles.textInputp}
                ></TextInput>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SubMenu', {result: this.state})}>
                        <Text style={styles.textButton}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}