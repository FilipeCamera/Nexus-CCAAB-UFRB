import React, {Component} from 'react';
import {
  Text,
  View,
  processColor,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import update from 'immutability-helper';
import {RadarChart} from 'react-native-charts-wrapper';
import styles from './styles';

export default class Grafico extends Component {
    static navigationOptions = {
        header: null,
    }
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params.result.data,
      legend: {
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true
      }
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={styles.boxT}>
          <Text style={styles.boxtitle}>GRÁFICO</Text>
        </View>
        <ScrollView>
            <View style={styles.container}>
            <RadarChart
                style={styles.chart}
                data={this.state.data}
                xAxis={this.state.xAxis}
                yAxis={{drawLabels:true}}
                chartDescription={{text: 'Área 1'}}
                legend={this.state.legend}
                drawWeb={true}

                webLineWidth={1}
                webLineWidthInner={1}
                webAlpha={255}
                webColor={processColor("gray")}
                webColorInner={processColor("gray")}

                skipWebLineCount={1}
            />
            </View>
            <View style={styles.box}> 
                <View style={styles.box2}>
                    <Text style={styles.boxtitle}>DADOS</Text>
                </View>
                <View style={styles.boxdesc}>
                    <Text style={styles.text}>1 - Topografia</Text>
                    <Text style={styles.text}>2 - Posição no Relevo</Text>
                    <Text style={styles.text}>3 - Densidade de Espontâneas</Text>
                    <Text style={styles.text}>4 - Erosão</Text>
                    <Text style={styles.text}>5 - Profundida do Horinzonte A</Text>
                    <Text style={styles.text}>6 - Retenção de Umidade (C.C) 0-20</Text>
                    <Text style={styles.text}>7 - Retenção de Umidade (C.C) 20-40</Text>
                    <Text style={styles.text}>8 - Retenção de Umidade Teste da mão 0-20</Text>
                    <Text style={styles.text}>9 - Retenção de Umidade Teste da mão 20-40</Text>
                    <Text style={styles.text}>10 - Atividade Biológica</Text>
                    <Text style={styles.text}>11 - Atividade Microbiologica 0-20</Text>
                    <Text style={styles.text}>12 - Atividade Microbiologica 20-40</Text>
                    <Text style={styles.text}>13 - Cor da Matéria Orgânica</Text>
                    <Text style={styles.text}>14 - Manta Orgânica</Text>
                    <Text style={styles.text}>15 - Estados dos Restos Vegetais</Text>
                    <Text style={styles.text}>16 - Maciez 0-20</Text>
                    <Text style={styles.text}>17 - Maciez 20-40</Text>
                    <Text style={styles.text}>18 - Penetração de Água 0-20</Text>
                    <Text style={styles.text}>19 - Penetração de Água 20-40</Text>
                    <Text style={styles.text}>20 - Matéria Orgânica Leve 0-20</Text>
                    <Text style={styles.text}>21 - pH 0-20</Text>
                    <Text style={styles.text}>22 - Matéria Orgânica Leve 20-40</Text>
                    <Text style={styles.text}>23 - pH 20-40</Text>
                    <Text style={styles.text}>24 - Massa Seca de Espontâneas</Text>
                </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}