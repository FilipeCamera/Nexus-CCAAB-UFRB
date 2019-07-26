import React, { Component } from 'react';

import {View, ScrollView, Text, CheckBox} from 'react-native';
import styles from './styles';

export default class Pesquisa extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return(
            <ScrollView style={{padding: 5}}>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>Topografia</Text>
                    </View>
                    <View style={styles.nota}>
                        <Text style={styles.txtNota}>Nota:</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox />
                        <Text style={styles.num}>1</Text>
                        <CheckBox />
                        <Text style={styles.num}>2</Text>
                        <CheckBox />
                        <Text style={styles.num}>3</Text>
                        <CheckBox />
                        <Text style={styles.num}>4</Text>
                        <CheckBox />
                        <Text style={styles.num}>5</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>Posição no Relevo</Text>
                    </View>
                    <View style={styles.nota}>
                        <Text style={styles.txtNota}>Nota:</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox />
                        <Text style={styles.num}>1</Text>
                        <CheckBox />
                        <Text style={styles.num}>2</Text>
                        <CheckBox />
                        <Text style={styles.num}>3</Text>
                        <CheckBox />
                        <Text style={styles.num}>4</Text>
                        <CheckBox />
                        <Text style={styles.num}>5</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>Densidade de Espontâneas</Text>
                    </View>
                    <View style={styles.nota}>
                        <Text style={styles.txtNota}>Nota:</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox />
                        <Text style={styles.num}>1</Text>
                        <CheckBox />
                        <Text style={styles.num}>2</Text>
                        <CheckBox />
                        <Text style={styles.num}>3</Text>
                        <CheckBox />
                        <Text style={styles.num}>4</Text>
                        <CheckBox />
                        <Text style={styles.num}>5</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>Erosão</Text>
                    </View>
                    <View style={styles.nota}>
                        <Text style={styles.txtNota}>Nota:</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox />
                        <Text style={styles.num}>1</Text>
                        <CheckBox />
                        <Text style={styles.num}>2</Text>
                        <CheckBox />
                        <Text style={styles.num}>3</Text>
                        <CheckBox />
                        <Text style={styles.num}>4</Text>
                        <CheckBox />
                        <Text style={styles.num}>5</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>Profundida do Horinzonte A</Text>
                    </View>
                    <View style={styles.nota}>
                        <Text style={styles.txtNota}>Nota:</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox />
                        <Text style={styles.num}>1</Text>
                        <CheckBox />
                        <Text style={styles.num}>2</Text>
                        <CheckBox />
                        <Text style={styles.num}>3</Text>
                        <CheckBox />
                        <Text style={styles.num}>4</Text>
                        <CheckBox />
                        <Text style={styles.num}>5</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>Retenção de Umidade (C.C) 0-20</Text>
                    </View>
                    <View style={styles.nota}>
                        <Text style={styles.txtNota}>Nota:</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox />
                        <Text style={styles.num}>1</Text>
                        <CheckBox />
                        <Text style={styles.num}>2</Text>
                        <CheckBox />
                        <Text style={styles.num}>3</Text>
                        <CheckBox />
                        <Text style={styles.num}>4</Text>
                        <CheckBox />
                        <Text style={styles.num}>5</Text>
                    </View>
                </View>
                
            </ScrollView>
        );
    }
}