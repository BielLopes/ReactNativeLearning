import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    
    const friends = [
        {name: 'Frind #1', key:'a'},
        {name: 'Frind #2', key:'b'},
        {name: 'Frind #3', key:'c'},
        {name: 'Frind #4', key:'d'},
        {name: 'Frind #5', key:'e'},
        {name: 'Frind #6', key:'f'},
    ];
    //esse é o metodo um para associar uma key for each object

    return (
        <View>
            <Text> Lsit Screen </Text>
            <FlatList
                horizontal={true} //Faz a lista ser horizontal ao invez de vertical
                showsHorizontalScrollIndicator={false}  //faz a barra inferior desapareer e isso é bom para o usuário
                //keyExtractor={friend => friend.name}
                data={friends} 
                renderItem={(element) => { //can use teh object destructor replacing element to { item }
                    // element === { item: {name: ''Frind #1}, index: 0 }
                    return (
                        <Text style={styles.textStyle}>{element.item.name}</Text>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;