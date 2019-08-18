import React, { Component } from 'react';

import {View, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import BoxUm from '../../components/box1';
import BoxDois from '../../components/box2';
import BoxTres from '../../components/box3';
import BoxQua from '../../components/box4';
import BoxCin from '../../components/box5';
import BoxSix from '../../components/box6';
import BoxSev from '../../components/box7';
import BoxEig from '../../components/box8';
import BoxNon from '../../components/box9';
import BoxDez from '../../components/box10';
import BoxOnz from '../../components/box11';
import BoxDoz from '../../components/box12';
import BoxTrez from '../../components/box13';
import BoxQuar from '../../components/box14';
import BoxQui from '../../components/box15';
import BoxDeze from '../../components/box16';
import BoxDese from '../../components/box17';
import BoxDeoi from '../../components/box18';
import BoxDeno from '../../components/box19';
import BoxVint from '../../components/box20';
import BoxVinU from '../../components/box21';
import BoxVinD from '../../components/box22';
import BoxVinT from '../../components/box23';
import BoxVInQ from '../../components/box24';

import styles from './styles';
export default class Pesquisa extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        valor = 0;
        this.state = {
            p: this.props.navigation.state.params.result.p,
            pontos: this.props.navigation.state.params.result.pontos,
            animating: true,
            pt1: 0,
            pt2: 0,
            pt3: 0,
            pt4: 0,
            pt5: 0,
            pt6: 0,
            pt7: 0,
            pt8: 0,
            pt9: 0,
            pt10: 0,
            pt11: 0,
            pt12: 0,
            pt13: 0,
            pt14: 0,
            pt15: 0,
            pt16: 0,
            pt17: 0,
            pt18: 0,
            pt19: 0,
            pt20: 0,
            pt21: 0,
            pt22: 0,
            pt23: 0,
            pt24: 0,

        }
    }
    click = valor => {
        this.setState({pt1: valor})
    }
    click2 = valor => {
        this.setState({pt2: valor})
    }
    click3 = valor => {
        this.setState({pt3: valor})
    }
    click4 = valor => {
        this.setState({pt4: valor})
    }
    click5 = valor => {
        this.setState({pt5: valor})
    }
    click6 = valor => {
        this.setState({pt6: valor})
    }
    click7 = valor => {
        this.setState({pt7: valor})
    }
    click8 = valor => {
        this.setState({pt8: valor})
    }
    click9 = valor => {
        this.setState({pt9: valor})
    }
    click10 = valor => {
        this.setState({pt10: valor})
    }
    click11 = valor => {
        this.setState({pt11: valor})
    }
    click12 = valor => {
        this.setState({pt12: valor})
    }
    click13 = valor => {
        this.setState({pt13: valor})
    }
    click14 = valor => {
        this.setState({pt14: valor})
    }
    click15 = valor => {
        this.setState({pt15: valor})
    }
    click16 = valor => {
        this.setState({pt16: valor})
    }
    click17 = valor => {
        this.setState({pt17: valor})
    }
    click18 = valor => {
        this.setState({pt18: valor})
    }
    click19 = valor => {
        this.setState({pt19: valor})
    }
    click20 = valor => {
        this.setState({pt20: valor})
    }
    click21 = valor => {
        this.setState({pt21: valor})
    }
    click22 = valor => {
        this.setState({pt22: valor})
    }
    click23 = valor => {
        this.setState({pt23: valor})
    }
    click24 = valor => {
        this.setState({pt24: valor})
    }
    componentDidMount(){
        this.closeActivy();
    }
    closeActivy = () => (
        setTimeout(() => {
            this.setState({animating: false})
        }, 4000)
    )
    render() {
        if(this.state.animating == true){
            return(
                <View style={styles.activy}>
                    <ActivityIndicator animating={this.state.animating} color='rgba(212, 184, 0, 0.6)'  size='large'/>
                </View>
            )
        } else {
            return(
                <View>
                <View style={styles.boxtitle}>
                    <Text style={styles.txttitle}>Dados</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    <BoxUm click={this.click}/>
                    <BoxDois click={this.click2}/> 
                    <BoxTres click={this.click3}/>
                    <BoxQua click={this.click4}/>
                    <BoxCin click={this.click5}/>
                    <BoxSix click={this.click6}/>
                    <BoxSev click={this.click7}/>
                    <BoxEig click={this.click8}/>
                    <BoxNon click={this.click9}/>
                    <BoxDez click={this.click10}/>
                    <BoxOnz click={this.click11}/>
                    <BoxDoz click={this.click12}/>
                    <BoxTrez click={this.click13}/>
                    <BoxQuar click={this.click14}/>
                    <BoxQui click={this.click15}/>
                    <BoxDeze click={this.click16}/>
                    <BoxDese click={this.click17}/>
                    <BoxDeoi click={this.click18}/>
                    <BoxDeno click={this.click19}/>
                    <BoxVint click={this.click20}/>
                    <BoxVinU click={this.click21}/>
                    <BoxVinD click={this.click22}/>
                    <BoxVinT click={this.click23}/>
                    <BoxVInQ click={this.click24}/>
                    
                    <View style={styles.boxbtn}>
                        <TouchableOpacity style={styles.btn} onPress={() => {
                            this.props.navigation.navigate('GraficoP', {result:this.state})
                            }}>
                            <Text style={styles.txtbtn}>Gerar Gráfico</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
            )
        }
            
        
    }
}