import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Flights() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

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

            <FlatList
                style={styles.flightList}
                data={[1, 2, 3]}
                keyExtractor={flight => String(flight)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.flight}>
                        <Text style={styles.flightProperty}>AIRLINE:</Text>
                        <Text style={styles.flightValue}>Maia</Text>

                        <Text style={styles.flightProperty}>DESTINO:</Text>
                        <Text style={styles.flightValue}>São Paulo</Text>

                        <Text style={styles.flightProperty}>DATA/HORA:</Text>
                        <Text style={styles.flightValue}>30/06 - 14:00</Text>

                        <Text style={styles.flightProperty}>PREÇO:</Text>
                        <Text style={styles.flightValue}>R$ 220,00</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                            <Text style={styles.detailsButtonText}>Entrar em contato</Text>
                            <Feather name="arrow-right" size={16} color='#17333C' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}