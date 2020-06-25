import React from 'react';
import { View, Image, Text } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Flights() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 voos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos voos abaixo e boa viagem.</Text>
        </View>
    );
}