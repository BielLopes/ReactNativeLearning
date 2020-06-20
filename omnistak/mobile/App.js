import React from 'react';
import Routes from './src/routes';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <Routes/>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      { rotateZ: '50deg' }
    ]
    
  },
});
*/
