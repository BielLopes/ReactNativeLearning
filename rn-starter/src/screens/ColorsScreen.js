import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button 
                title="Add a Color" 
                onPress ={ () => {
                    setColors([...colors, randomRgb()]);
                    // Percebemos que o fato de mudarmos o estado faz com que uma nova cor seja gerada no View logo abaixo,
                    // isso ocoore pois como todo o elemento é renderizado novamente a função gera uma nova cor
                }}
            />
            <View style={{height: 100, width: 100, backgroundColor: randomRgb()}} />
            <FlatList 
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return (<View style={{height: 100, width: 100, backgroundColor: item}} />);
                }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
};

const styles = StyleSheet.create({});

export default ColorScreen;