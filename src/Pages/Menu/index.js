import React, { Component } from 'react';

import { View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

export default class Menu extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            nome: null || ' ',
            localizacao: null || ' ',
            data: '01-01-2018',
            //pontos: 0,
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../../images/logoNexus.jpeg')} style={{width: 130, height: 130, borderRadius: 60}}/>
                </View>
    
                <Text style={styles.title}>Formulário</Text>
                
                <View style={styles.form}>
                    <TextInput 
                        autoCompleteType='name'
                        keyboardType='default'
                        onChangeText={(name) => this.setState({nome: name})}
                        placeholder='Nome do Proprietário'
                        style={styles.textInput}
                    ></TextInput>
                    <TextInput 
                        textContentType='addressCityAndState'
                        autoCompleteType='street-address'
                        keyboardType='default'
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
                        keyboardType='numeric'
                        style={styles.textInputp} 
                        placeholder='Nº de Pontos'
                        onChangeText={(ponto) => this.setState({pontos: ponto})}
                    />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if(this.state.nome == null && this.state.localizacao == null && this.state.pontos == null){
                            Alert.alert('Preencha todos os campos!')
                        } 
                        else if(this.state.nome == null || this.state.localizacao == null || this.state.pontos == null){
                            Alert.alert('Preencha todos os campos!')
                        }
                        else if(this.state.nome == ' ' || this.state.localizacao == ' ' || this.state.pontos == null){
                            Alert.alert('Preencha todos os campos!')
                        }
                        else if(this.state.pontos > 5 || this.state.pontos < 1){
                            Alert.alert('O número de pontos tem que ser >= 1 e <= 5')
                        }
                        else {
                            this.props.navigation.navigate('SubMenu', {result: this.state})
                        }}}>
                        <Text style={styles.textButton}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}