import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';


export default function App() {

  var [C, setC] = useState('');
  var [F, setF] = useState('');

  function CalcularTemperatura() {

    const v1 = parseFloat(C);
    


    const temperatura = (9 * v1 + 160) / 5 ;

    alert('A temperatura em  Fahrenheit é ' + temperatura);
  }

  return (
    <View style={styles.container}>

      <Image style={{ width: 500, height: 200, borderRadius: 30, top: -40 }}
        source={{
          uri:
            'https://i.pinimg.com/originals/5e/29/08/5e290807289aa0e6963fbbf01a03e70e.jpg'
        }} />

      <Text style={styles.titulo}>Conversão de Temperatura</Text>

      <TextInput
        style={styles.campo}
        placeholder='Digite temperatura em Celsius'
        keyboardType='numeric' 
        onChangeText={(C) => setC(C)}
      />

      <TouchableOpacity style={styles.botao}
        onPress={CalcularTemperatura}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    textAlign: 'center',
    marginTop: -10,
    fontSize: 30,
    color: '#000000',
  },

  campo: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    margin: 20,
    padding: 15,
    color: '#000',
    fontSize: 25,
    width: 450,
    textAlign: 'center',
  },

  botao: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#094773',
    padding: 10,
    borderRadius: 20
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 25,
  },

});
