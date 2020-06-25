import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá Maia, estou entrando em contato para comprar um assento no voo "São paulo - 30/06 - 14:00" com o valor de R$ 220,00.';

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Comprar voo: Sâo Paulo - 30/06 - 14:00',
            recipients: ['mateusgomes.nascimento21@gmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5561996927595&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color='#17333C' />
                </TouchableOpacity>
            </View>

            <View style={styles.flight}>
                <Text style={[styles.flightProperty, { marginTop: 0 }]}>AIRLINE:</Text>
                <Text style={styles.flightValue}>Maia</Text>

                <Text style={styles.flightProperty}>DESTINO:</Text>
                <Text style={styles.flightValue}>São Paulo</Text>

                <Text style={styles.flightProperty}>DATA/HORA:</Text>
                <Text style={styles.flightValue}>30/06 - 14:00</Text>

                <Text style={styles.flightProperty}>PREÇO:</Text>
                <Text style={styles.flightValue}>R$ 220,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.vooTitle}>Compre uma passagem e</Text>
                <Text style={styles.vooTitle}>boa viagem!</Text>

                <Text style={styles.vooDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}