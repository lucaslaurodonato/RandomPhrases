import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

// Formatações
const styles = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495e'
  },
  caixaTexto: {
    backgroundColor: '#27ae60',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  botao: {
    backgroundColor: '#27ae60',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

};


const gerarNovaFrase = () => {

  var numeroAleatorio = Math.floor(Math.random() * frases.length );

  //frases
  var frases = Array ( 'Tire o dia para sorrir.' ,  
  'As noites mais escuras produzem as estrelas mais brilhantes.' ,
  'Colecione momentos, não coisas.' );


  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);

  

}

 const { principal, botao, textoBotao, caixaTexto} = styles; // Destructuring Assignment

 class App extends Component {

  render() {
    return (
      <View style={principal}>
        <Image source={ require ('./src/pictures/icon.png') } style={{width:100, height: 100}} />
        <Text style={caixaTexto}>Nova frase</Text>
        <TouchableOpacity
          onPress={gerarNovaFrase}
          style={botao}>
          <Text style={textoBotao}>Nova Frase</Text>      
        </TouchableOpacity>
      </View>
    );
  }
}

export default App

// flex: Preenche todo o espaço do componente se for ele o principal
// margin: 30,
// color: '#FFF',
// fontWeight: '500',
// textAlign: 'center'
// textDecorationLine: 'underline'
// justifyContent: Alinha na vertical
// alignItems: Alinha na horizontal
// flexDirection: Direção da imagem no componente Pai
// TouchableOpacity: Coloca opacidade o no View ou nos componentes

// <Image source={ require('./images/rafael.jpg') } />
// onPress ao clicar no botao fazer uma acao
// Alert para não aparecer o alert normal

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

