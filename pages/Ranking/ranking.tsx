import React, {useState} from 'react';
import styles from '../style/styles'
import icons from '../../icons/icon-components'
// import {MaterialIcons} from '@expo/vector-icons'

import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from 'react-native';

  export default function Ranking({navigation}) {
    const  [cc, setCc] = useState([    
        { position: '1º', id: 'Centro de custo 23', nota: '4,3' },
        { position: '2º', id: 'Centro de custo 11', nota: '4,4' },
        { position: '3º', id: 'Centro de custo 02', nota: '4,8' },
        { position: '4º', id: 'Centro de custo 17', nota: '3,8' },
        { position: '5º', id: 'Centro de custo 14', nota: '4,1' },
        { position: '6º', id: 'Centro de custo 03', nota: '3,3' },
        { position: '7º', id: 'Centro de custo 09', nota: '4,3' },
        { position: '8º', id: 'Centro de custo 13', nota: '4,4' },
        { position: '9º', id: 'Centro de custo 20', nota: '4,8' },
        { position: '10º', id: 'Centro de custo 21', nota: '3,8' },
        { position: '11º', id: 'Centro de custo 27', nota: '4,1' },
        { position: '12º', id: 'Centro de custo 24', nota: '3,3' },
        { position: '13º', id: '102Centro de custo 12', nota: '4,3' },
 
    ]);
    const pressHandler = (id) => {
        console.log(id);
    } 
    return (
        <>
            <View style={styles.container}>
                <View style={{ flex: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TextInput style={styles.textInput1} placeholder='Buscar'></TextInput>
                    <TouchableOpacity style={{ width: 48, height: 48, backgroundColor: '#000', display: "flex", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('Filters')}>
                        <Image style={styles.iconDimension} source={require('../../icons/search_white.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <Text style={styles.bodyText}>Filtrar</Text>
                    <TouchableOpacity style={{ width: 48, height: 48, display: "flex", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('Filters')}>
                    <Image style={styles.iconDimension} source={require('../../icons/filter.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 0, flexDirection: "row", marginBottom: 108 }}>

                    <FlatList style={{
                        flex: 0,
                        flexDirection: 'column',
                        marginTop: 8,
                        marginLeft: 8,
                        width: '100%'
                    }}

                        keyExtractor={cc => cc.position}
                        data={cc}
                        renderItem={({ item }) => {

                            return (
                                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('RankingDetalhes')}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{item.position}      <Text style={{ fontSize: 18, fontWeight: 'normal' }}>{item.id}</Text> </Text>
                                    <Text style={{ fontSize: 18 }}>{item.nota}</Text>
                                </TouchableOpacity>
                            );
                        }}

                    />

                </View>
            </View>
            </>
            );    
    };
    
  