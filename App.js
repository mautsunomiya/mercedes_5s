/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
<<<<<<< HEAD
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
              <Text> Marina Naomi</Text>
              <Text> Thiago Doria</Text>
              <Text> Igor Rosmaninho</Text>
              <Text> Murilo Marchioni</Text>
              <Text> Allef Fante</Text>
              <Text> teste</Text>
              <Text> teste igor</Text>
              <Text> teste murilo</Text>
              <Text>Rogério Yukio</Text>
              <Text>Gabriel Rodrigues</Text>      
=======
      <View style={{backgroundColor: '#000000', flex: 1, flexDirection: "column"}}>
        <Image source= {{uri: 'https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo.png'}}
        style = {{ width: 300, height:300, alignSelf: 'center', marginVertical: 48}}/>
>>>>>>> f437d1c5d337c99d6fdf04324d1866a5a136b98d

        <View style={{ borderRadius: 8, margin: 16, }}> 
          <Text style={{color: '#fff', fontSize: 14, marginTop: 8}}>E-mail</Text>
          <TextInput style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 40, marginVertical: 16}}>Digite seu e-mail</TextInput>
        </View>
        <View style={{ borderRadius: 8, margin: 16, }}> 
          <View style= {{flexDirection: "row",  justifyContent: "space-between"}}>
            <Text style={{color: '#fff', fontSize: 14, marginTop: 8}}>Senha</Text>
            <Text style={{color: '#fff', textDecorationLine: "underline", fontSize: 16, fontWeight: "bold"}}>Esqueci minha senha</Text>
         </View>
          <TextInput style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 40, marginTop: 16, marginBottom: 8}}>Digite sua senha</TextInput>
          <Text style={{color: '#Fff', fontSize: 12, fontWeight: "bold" }}>Senha incorreta</Text>
        </View>
      </View>
    </>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  // Inserting primary button (CSS to React)
  primaryButton: {
    position:'absolute',
    width:'328px',
    height:'48px',
    left:'31px',
    top:'733px'
  }

});

export default App;
