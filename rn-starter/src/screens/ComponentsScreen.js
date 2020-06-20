import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greeting = 'By there!'; // is not possible use JavaScript Object
    const fun = <Text>Holly Day!</Text>;

    return (
             <View>
                <Text style={styles.textStyle}>This is the component screen</Text>
                <Text>Hi there!</Text>
                <Text>{greeting}</Text>
                {fun}
            </View>
    );
};
//Some alternative to use style is use inline style: style={{ fintSize: 30 }}; But will bo a warning an is not a good pratice and not will work correctly
// o style na tag é chamado de props
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;