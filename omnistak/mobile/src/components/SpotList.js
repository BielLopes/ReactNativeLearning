import React, { useState, useEffect } from 'react';
import  { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../srevice/api';

 function SpotList({ tech, navigation }){

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots(){
            const response  = api.get('/spots', {
                params: { tech } // isso é equivalente a fazer /spots?tech=Node
            });

            console.log(response.data);

            
            setSpots([
                {
                  "techs": [
                    "Computacao Qantica"
                  ],
                  "_id": "5d94ec9fde6f1a34c388eb85",
                  "user": "5d94d94dc79c1b23c08bd501",
                  "tumbnail": "4k-saber-katana-tsumugari-muramasa-fate-grand-order-1570040991640.jpg",
                  "company": "Google",
                  "price": null,
                  "createdAt": "2019-10-02T18:29:51.824Z",
                  "__v": 0,
                  "thumbnail_url": "http://192.168.0.7:3333/files/4k-saber-katana-tsumugari-muramasa-fate-grand-order-1570040991640.jpg",
                  "id": "5d94ec9fde6f1a34c388eb85"
                },
                {
                  "techs": [
                    "REdes Neurais"
                  ],
                  "_id": "5d94edc9ba6c93370a7f36ec",
                  "user": "5d94d94dc79c1b23c08bd501",
                  "tumbnail": "4k-saber-katana-tsumugari-muramasa-fate-grand-order-1570041289134.jpg",
                  "company": "Embraer",
                  "price": null,
                  "createdAt": "2019-10-02T18:34:49.326Z",
                  "__v": 0,
                  "thumbnail_url": "http://192.168.0.7:3333/files/4k-saber-katana-tsumugari-muramasa-fate-grand-order-1570041289134.jpg",
                  "id": "5d94edc9ba6c93370a7f36ec"
                },
                {
                  "techs": [
                    "Angular",
                    "Spring"
                  ],
                  "_id": "5d94ee0cba6c93370a7f36ed",
                  "user": "5d94d94dc79c1b23c08bd501",
                  "tumbnail": "4k-saber-katana-tsumugari-muramasa-fate-grand-order-1570041356413.jpg",
                  "company": "Enacom",
                  "price": 90,
                  "createdAt": "2019-10-02T18:35:56.587Z",
                  "__v": 0,
                  "thumbnail_url": "http://192.168.0.7:3333/files/4k-saber-katana-tsumugari-muramasa-fate-grand-order-1570041356413.jpg",
                  "id": "5d94ee0cba6c93370a7f36ed"
                },
                {
                  "techs": [
                    "Redes Neurais",
                    "Micrprocessadores",
                    "Engenharia de Controle"
                  ],
                  "_id": "5d95051f4c8b2648dd34c500",
                  "user": "5d94d94dc79c1b23c08bd501",
                  "tumbnail": "MIkasa-1570047263838.jpg",
                  "company": "New TECH",
                  "price": 60,
                  "createdAt": "2019-10-02T20:14:23.863Z",
                  "__v": 0,
                  "thumbnail_url": "http://192.168.0.7:3333/files/MIkasa-1570047263838.jpg",
                  "id": "5d95051f4c8b2648dd34c500"
                },
              ])
        }

        loadSpots();
    }, []);

    function handleNavigation(id){
        navigation.navigate('Book', { id });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => ( //Auqi também podemos receber informações como, se é o primeiro item da lista, último, par, impar, index
                    <View style={styles.listItem}>
                        <Image
                         source={{ uri: item.thumbnail_url }} 
                         style={styles.thumbnail}
                         />
                         <Text style={styles.company}>{item.company}</Text>
                         <Text style={styles.price}>{item.price ? `R$${item.price}/dia`: 'GRATUITO'}</Text>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => handleNavigation(item._id)}
                            >
                            <Text style={styles.buttonText}>
                                Solicitar reserva
                            </Text>
                        </TouchableOpacity>
                    </View>    
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight: 'bold'
    },
    list:{
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
    },
    thumbnail:{
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    price: {
        fontSize: 15,
        color: "#999",
        marginTop: 5,
    },
    button: {
        height: 32,
        backgroundColor: "#f05a5b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        margin: 15,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15,
    }
});

export default withNavigation(SpotList);