import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client'
import { Alert, ScrollView, SafeAreaView, Text, AsyncStorage, Image, StyleSheet } from 'react-native';

import  SpotList from '../components/SpotList';

import logo from '../assets/logo.png'
export default function List(){

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user') // O AssyncStorage é uma abstração do SQLite
            .then(user_id => {
                const socket = socketio('http://192.168.0.7:3333', {
                    query: { user_id }
                })

                socket.on('booking_response', book => {
                    Alert.alert(`Sua reserva em  ${book.spot.company} em ${book.date} foi ${book.aproved? 'APROVADA': 'REJEITADA'}`); //isso é um ifen ternário
                });    
            })
    }, []);

    useEffect(() =>{
        AsyncStorage.getItem('techs')
            .then(storagedTechs => {
                
                const techsArray = storagedTechs.split(',').map(tech => tech.trim());

                setTechs(techsArray);
            })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>    
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
    },

});