import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import avocado from './assets/avocado.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={avocado} style={styles.avocado}/>
      <Text style={{ fontSize: 20 }}>I have eaten</Text>
      <Text style={{  fontSize: 60 }}>0</Text>
      <Text style={{ fontSize: 20}}>Avocados</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avocado: {
    width: 160,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 50
  }
});
