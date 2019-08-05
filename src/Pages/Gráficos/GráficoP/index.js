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
  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true
      }
    };
  }

  componentDidMount() {
      if(this.props.navigation.state.params.result.pontos == 1){
          this.setState(
              update(this.state, {
                  data: {
                      $set: {
                          dataSets: [{
                              label: 'Ponto 1',
                              config: {
                                  color: processColor('#FF8C9D'),
                                  drawFilled: true,
                                  fillColor: processColor('#FF8C9D'),
                                  fillAlpha: 100,
                                  lineWidth: 2
                              },
                              values: [
                                  {value: this.props.navigation.state.params.result.pt1},
                                  {value: this.props.navigation.state.params.result.pt2},
                                  {value: this.props.navigation.state.params.result.pt3},
                                  {value: this.props.navigation.state.params.result.pt4},
                                  {value: this.props.navigation.state.params.result.pt5},
                                  {value: this.props.navigation.state.params.result.pt6},
                                  {value: this.props.navigation.state.params.result.pt7},
                                  {value: this.props.navigation.state.params.result.pt8},
                                  {value: this.props.navigation.state.params.result.pt9},
                                  {value: this.props.navigation.state.params.result.pt10},
                                  {value: this.props.navigation.state.params.result.pt11},
                                  {value: this.props.navigation.state.params.result.pt12},
                                  {value: this.props.navigation.state.params.result.pt13},
                                  {value: this.props.navigation.state.params.result.pt14},
                                  {value: this.props.navigation.state.params.result.pt15},
                                  {value: this.props.navigation.state.params.result.pt16},
                                  {value: this.props.navigation.state.params.result.pt17},
                                  {value: this.props.navigation.state.params.result.pt18},
                                  {value: this.props.navigation.state.params.result.pt19},
                                  {value: this.props.navigation.state.params.result.pt20},
                                  {value: this.props.navigation.state.params.result.pt21},
                                  {value: this.props.navigation.state.params.result.pt22},
                                  {value: this.props.navigation.state.params.result.pt23},
                                  {value: this.props.navigation.state.params.result.pt24},
                                ]
                          }],
                      }
                  },
                  xAxis: {
                      $set: {
                          valueFormatter: [
                              '1','2','3','4','5','6','7','8','9','10',
                              '11','12','13','14','15','16','17','18','19','20',
                              '21','22','23','24'
                          ]
                      }
                  }
              })
          );
        }
        if(this.props.navigation.state.params.result.pontos == 2){
            this.setState(
                update(this.state, {
                    data: {
                        $set: {
                            dataSets: [{
                                label: 'Ponto 1',
                                config: {
                                    color: processColor('#FF8C9D'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C9D'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            },{
                                label: 'Ponto 2',
                                config: {
                                    color: processColor('#FF8C'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ]
                            }],
                        }
                    },
                    xAxis: {
                        $set: {
                            valueFormatter: [
                                '1','2','3','4','5','6','7','8','9','10',
                                '11','12','13','14','15','16','17','18','19','20',
                                '21','22','23','24'
                            ]
                        }
                    }
                })
            );
          }
          if(this.props.navigation.state.params.result.pontos == 3){
            this.setState(
                update(this.state, {
                    data: {
                        $set: {
                            dataSets: [{
                                label: 'Ponto 1',
                                config: {
                                    color: processColor('#FF8C9D'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C9D'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            },{
                                label: 'Ponto 2',
                                config: {
                                    color: processColor('#FF8C'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ]
                            },{
                                label: 'Ponto 3',
                                config: {
                                    color: processColor('#FC1A'),
                                    drawFilled: true,
                                    fillColor: processColor('#FC1A'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            }],
                        }
                    },
                    xAxis: {
                        $set: {
                            valueFormatter: [
                                '1','2','3','4','5','6','7','8','9','10',
                                '11','12','13','14','15','16','17','18','19','20',
                                '21','22','23','24'
                            ]
                        }
                    }
                })
            );
          }
          if(this.props.navigation.state.params.result.pontos == 4){
            this.setState(
                update(this.state, {
                    data: {
                        $set: {
                            dataSets: [{
                                label: 'Ponto 1',
                                config: {
                                    color: processColor('#FF8C9D'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C9D'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            },{
                                label: 'Ponto 2',
                                config: {
                                    color: processColor('#FF8C'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ]
                            },{
                                label: 'Ponto 3',
                                config: {
                                    color: processColor('#FC1A'),
                                    drawFilled: true,
                                    fillColor: processColor('#FC1A'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            },{
                                label: 'Ponto 4',
                                config: {
                                    color: processColor('#AB32AC'),
                                    drawFilled: true,
                                    fillColor: processColor('#AB32AC'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            }],
                        }
                    },
                    xAxis: {
                        $set: {
                            valueFormatter: [
                                '1','2','3','4','5','6','7','8','9','10',
                                '11','12','13','14','15','16','17','18','19','20',
                                '21','22','23','24'
                            ]
                        }
                    }
                })
            );
          }
          if(this.props.navigation.state.params.result.pontos == 5){
            this.setState(
                update(this.state, {
                    data: {
                        $set: {
                            dataSets: [{
                                label: 'Ponto 1',
                                config: {
                                    color: processColor('#FF8C9D'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C9D'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            },{
                                label: 'Ponto 2',
                                config: {
                                    color: processColor('#FF8C'),
                                    drawFilled: true,
                                    fillColor: processColor('#FF8C'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ]
                            },{
                                label: 'Ponto 3',
                                config: {
                                    color: processColor('#FC1A'),
                                    drawFilled: true,
                                    fillColor: processColor('#FC1A'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            },{
                                label: 'Ponto 4',
                                config: {
                                    color: processColor('#AB32AC'),
                                    drawFilled: true,
                                    fillColor: processColor('#AB32AC'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            },{
                                label: 'Ponto 5',
                                config: {
                                    color: processColor('#CCAA22'),
                                    drawFilled: true,
                                    fillColor: processColor('#CCAA22'),
                                    fillAlpha: 100,
                                    lineWidth: 2
                                },
                                values: [
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                    {value: 1},
                                    {value: 2},
                                  ],
                            }],
                        }
                    },
                    xAxis: {
                        $set: {
                            valueFormatter: [
                                '1','2','3','4','5','6','7','8','9','10',
                                '11','12','13','14','15','16','17','18','19','20',
                                '21','22','23','24'
                            ]
                        }
                    }
                })
            );
          }
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
            <View style={styles.btn}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Pontos', {result: this.state})}
                >
                    <Text style={styles.btntext}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }
}