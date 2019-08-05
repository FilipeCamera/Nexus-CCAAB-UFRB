import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Ponto = ({ params, navigation }) => {
    let { pontos } = params;
    if (pontos == 1){
        return(
            <View style={styles.box}>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 1</Text>
                    <Text style={styles.tableDesc}>Primeira área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa', {result: params})}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }if (pontos == 2){
        return(
            <View style={styles.box}>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 1</Text>
                    <Text style={styles.tableDesc}>Primeira área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 2</Text>
                    <Text style={styles.tableDesc}>Segunda área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }if (pontos == 3){
        return(
            <View style={styles.box}>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 1</Text>
                    <Text style={styles.tableDesc}>Primeira área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 2</Text>
                    <Text style={styles.tableDesc}>Segunda área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 3</Text>
                    <Text style={styles.tableDesc}>Terceira área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }if (pontos == 4){
        return(
            <View style={styles.box}>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 1</Text>
                    <Text style={styles.tableDesc}>Primeira área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 2</Text>
                    <Text style={styles.tableDesc}>Segunda área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 3</Text>
                    <Text style={styles.tableDesc}>Terceira área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.table}>
                    <Text style={styles.tableTitle}>Ponto 4</Text>
                    <Text style={styles.tableDesc}>Quarta área a ser estudada.</Text>
                    <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                        <Text style={styles.btnText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }if (pontos == 5){
        return(
            <View style={styles.box}>
            <View style={styles.table}>
                <Text style={styles.tableTitle}>Ponto 1</Text>
                <Text style={styles.tableDesc}>Primeira área a ser estudada.</Text>
                <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                    <Text style={styles.btnText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.table}>
                <Text style={styles.tableTitle}>Ponto 2</Text>
                <Text style={styles.tableDesc}>Segunda área a ser estudada.</Text>
                <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                    <Text style={styles.btnText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.table}>
                <Text style={styles.tableTitle}>Ponto 3</Text>
                <Text style={styles.tableDesc}>Terceira área a ser estudada.</Text>
                <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                    <Text style={styles.btnText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.table}>
                <Text style={styles.tableTitle}>Ponto 4</Text>
                <Text style={styles.tableDesc}>Quarta área a ser estudada.</Text>
                <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                    <Text style={styles.btnText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.table}>
                <Text style={styles.tableTitle}>Ponto 5</Text>
                <Text style={styles.tableDesc}>Quinta área a ser estudada.</Text>
                <TouchableOpacity style={styles.tableBtn} onPress={() => navigation.navigate('Pesquisa')}>
                    <Text style={styles.btnText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

export default Ponto;