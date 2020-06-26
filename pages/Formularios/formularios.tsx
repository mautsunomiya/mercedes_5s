import React, { Component } from 'react';
import api from '../Formularios/api';
//import { ScrollView } from 'react-native-gesture-handler';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Button,
    ScrollView,
    
  } from 'react-native';
  import styles from '../style/styles'

  export default class Formularios extends Component{

    
    state = {
      docs: []
    };

    componentDidMount() {
         api.get('')
        .then(response => {
          this.setState({
           docs: response.data
          });

        console.warn("Data", this.state.docs);
      })
      .catch(error => console.log(error));
      }
      

render() {
  const { navigation } = this.props;
  return (
    //<ScrollView>
      <View style={styles.container}>
        <FlatList
          //contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View>
              <Text style={styles.h2}>Centro de custo: {item.Cost_center_id}</Text>
              <Text style={styles.bodyText}>Nota: {item.Answer_average_5s}</Text>
              <Text style={styles.bodyText}>Data da avaliação: {item.createdAt}</Text>

              
                
              <TouchableOpacity style={styles.secondaryButton} onPress={() => {}}>
                <Text style={styles.secondaryButtonText}> Detalhes </Text>
               </TouchableOpacity>

              <View style={styles.divisor}/>
            </View>
          )}
           
        />
      </View>
    //</ScrollView>
  )
}
}
