import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text> {color} </Text>
            <Button 
                title={`Increse ${color}`}
                onPress={() => { onIncrease() }}
            />
            <Button 
                title={`Decrese ${color}`}
                onPress={() => { onDecrease() }}

            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;