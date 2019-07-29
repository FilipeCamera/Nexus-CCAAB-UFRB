import React, { Component } from 'react';

import {View, Text} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from './styles';

export default class BoxUm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked1: false,
            isChecked2: false,
            isChecked3: false,
            isChecked4: false,
            isChecked5: false,
        }
    }
    render(){
        return(
            <View>
                <View style={styles.box}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>Cor da Matéria Orgânica</Text>
                    </View>
                    <View style={styles.nota}>
                        <Text style={styles.txtNota}>Nota:</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox isChecked={this.state.isChecked1} onClick={() => {
                            if(this.state.isChecked1 == false){
                                this.setState({ isChecked1: !this.state.isChecked});
                                this.setState({ isChecked2: false, isChecked3: false, isChecked4: false, isChecked5: false})
                            }else if(this.state.isChecked1 == true){
                                this.setState({isChecked1: false});
                            }}}/>
                        <Text style={styles.num}>1</Text>
                        <CheckBox isChecked={this.state.isChecked2} onClick={() => {
                            if(this.state.isChecked2 == false){
                                this.setState({ isChecked2: !this.state.isChecked});
                                this.setState({ isChecked1: false, isChecked3: false, isChecked4: false, isChecked5: false})
                            }else if(this.state.isChecked2 == true){
                                this.setState({isChecked2: false});
                            }}}/>
                        <Text style={styles.num}>2</Text>
                        <CheckBox isChecked={this.state.isChecked3} onClick={() => {
                            if(this.state.isChecked3 == false){
                                this.setState({ isChecked3: !this.state.isChecked});
                                this.setState({ isChecked1: false, isChecked2: false, isChecked4: false, isChecked5: false})
                            }else if(this.state.isChecked3 == true){
                                this.setState({isChecked3: false});
                            }}}/>
                        <Text style={styles.num}>3</Text>
                        <CheckBox isChecked={this.state.isChecked4} onClick={() => {
                            if(this.state.isChecked4 == false){
                                this.setState({ isChecked4: !this.state.isChecked});
                                this.setState({ isChecked1: false, isChecked2: false, isChecked3: false, isChecked5: false})
                            }else if(this.state.isChecked4 == true){
                                this.setState({isChecked4: false});
                            }}}/>
                        <Text style={styles.num}>4</Text>
                        <CheckBox isChecked={this.state.isChecked5} onClick={() => {
                            if(this.state.isChecked5 == false){
                                this.setState({ isChecked5: !this.state.isChecked});
                                this.setState({ isChecked1: false, isChecked2: false, isChecked3: false, isChecked4: false})
                            }else if(this.state.isChecked5 == true){
                                this.setState({isChecked5: false});
                            }}}/>
                        <Text style={styles.num}>5</Text>
                    </View>
                </View>
            </View>
        )
    }
}