import React, { Component } from 'react';

import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

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
    render() {
        return(
            <View>
                <View style={styles.boxtitle}>
                    <Text style={styles.txttitle}>Dados</Text>
                </View>
                <ScrollView style={{padding: 0}}>
                    <BoxUm />
                    <BoxDois /> 
                    <BoxTres />
                    <BoxQua />
                    <BoxCin />
                    <BoxSix />
                    <BoxSev />
                    <BoxEig />
                    <BoxNon />
                    <BoxDez />
                    <BoxOnz />
                    <BoxDoz />
                    <BoxTrez />
                    <BoxQuar />
                    <BoxQui />
                    <BoxDeze />
                    <BoxDese />
                    <BoxDeoi />
                    <BoxDeno />
                    <BoxVint />
                    <BoxVinU />
                    <BoxVinD />
                    <BoxVinT />
                    <BoxVInQ />                          
                    <View style={styles.boxbtn}>
                        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.txtbtn}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>                
            </View>
        );
    }
}