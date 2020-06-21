import React, { useReducer } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCRESE  = 15;

const reducer = (state, action) => {
    //state === {red: number, green: number, blue: number}
    //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    //for convenction action is {type: '', payload: ''}
    //action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

    switch(action.type){
        case 'change_red':
            //never gona to do: state.red = state.red + 15
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state    
            : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state    
            : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state    
            : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 } );
    //dispatch -> runMyReducer

    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                color="Red"
                onIncrease={() => dispatch({ typ: 'change_red', payload: COLOR_INCRESE })}
                onDecrease={() => dispatch({ typ: 'change_red', payload: -1 * COLOR_INCRESE })}
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => dispatch({ typ: 'change_green', payload: COLOR_INCRESE })}
                onDecrease={() => dispatch({ typ: 'change_green', payload: -1 *  COLOR_INCRESE })}
            />
            <ColorCounter 
                color="Blue" 
                onIncrease={() => dispatch({ typ: 'change_blue', payload: COLOR_INCRESE })}
                onDecrease={() => dispatch({ typ: 'change_blue', payload: -1 * COLOR_INCRESE })}
            />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}} /> 
        </View>
    );
};


/*
const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        //collor === 'red', 'green', 'blue
        //change === +15, -15

        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
        }
    };

    return (
        <View>
            <ColorCounter 
                color="Red"
                onIncrease={() => setColor('red', COLOR_INCRESE)}
                onDecrease={() => setColor('red', -1 * COLOR_INCRESE)}
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => setColor('green', COLOR_INCRESE)}
                onDecrease={() => setColor('green', -1 * COLOR_INCRESE)}
            />
            <ColorCounter 
                color="Blue" 
                onIncrease={() => setColor('blue', COLOR_INCRESE)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCRESE)}
            />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}} /> 
        </View>
    );
};
*/

const styles = StyleSheet.create({});

export default SquareScreen;