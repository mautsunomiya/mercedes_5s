import React, {useState} from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList
  } from 'react-native';
  import styles from '../../style/styles'
  import icons from '../../../icons/icon-components'

  
  async function postData(url = '', data = {}) { 
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
})
  }

  export default function Padronizacao({navigation}) {
  
    const formPadronizacao = [
      { question: '1.1. Utilização dos recursos existentes nos locais abertos', id: '1', },
      { question: '1.2. Utilização dos recursos existentes nos locais fechados', id: '2' },
      { question: '1.3. Estado de conservação de instalações e recursos ', id: '3' },
      { question: '1.4. Controle dos problemas de conservação', id: '4' },
  ];

  function Question({ id, question, selected, onSelect }) {
      return (
          <View>
              <Text style={styles.bodyText}> {question}</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24 }}>
                  <TouchableOpacity style={styles.iconContainer} onPress={() => { onSelect(id); answerOne() }} ><Image style={styles.iconDimension} source={selected && iconOneSelected ? icons.OneSelected : icons.One} /></TouchableOpacity>
                  <TouchableOpacity style={styles.iconContainer} onPress={() => { onSelect(id); answerTwo() }}><Image style={styles.iconDimension} source={selected && iconTwoSelected ?  icons.TwoSelected : icons.Two } /></TouchableOpacity>
                  <TouchableOpacity style={styles.iconContainer} onPress={() => { onSelect(id); answerThree() }}><Image style={styles.iconDimension} source={selected && iconThreeSelected ? icons.ThreeSelected : icons.Three} /></TouchableOpacity>
                  <TouchableOpacity style={styles.iconContainer} onPress={() => { onSelect(id); answerFour() }}><Image style={styles.iconDimension} source={selected && iconFourSelected ? icons.FourSelected : icons.Four} /></TouchableOpacity>
                  <TouchableOpacity style={styles.iconContainer} onPress={() => { onSelect(id); answerFive() }}><Image style={styles.iconDimension} source={selected && iconFiveSelected ? icons.FiveSelected : icons.Five} /></TouchableOpacity>
              </View>
              {selected && noteDescriptionOne ? noteOne() : null}
              {selected && noteDescriptionTwo ? noteTwo() : null}
              {selected && noteDescriptionThree ? noteThree() : null}
              {selected && noteDescriptionFour ? noteFour() : null}
              {selected && noteDescriptionFive ? noteFive() : null}
              <Text style={styles.imputLabel}> Justifique: </Text>
              <TextInput style={styles.imputText}>Escreva aqui sua justificativa</TextInput>
              <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate("Evidencia")} >
                  <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
              </TouchableOpacity>
              <View style={styles.divisor}></View>
          </View>
      );
  }


  //Id de cada pergunta

  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
      id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));

          setSelected(newSelected);
      },
      [selected],

  );


  //botão funcionar e trocar
  const [iconOneSelected, setIconOneSelected] = useState(false);
  const [iconTwoSelected, setIconTwoSelected] = useState(false);
  const [iconThreeSelected, setIconThreeSelected] = useState(false);
  const [iconFourSelected, setIconFourSelected] = useState(false);
  const [iconFiveSelected, setIconFiveSelected] = useState(false);


  //Condicional para aparecer descritivo da nota (in progress)
  const [noteDescriptionOne, setNoteDescriptionOne] = useState(false)
  const [noteDescriptionTwo, setNoteDescriptionTwo] = useState(false)
  const [noteDescriptionThree, setNoteDescriptionThree] = useState(false)
  const [noteDescriptionFour, setNoteDescriptionFour] = useState(false)
  const [noteDescriptionFive, setNoteDescriptionFive] = useState(false)

  const answerOne = () => {
      setIconOneSelected(!iconOneSelected);
      setNoteDescriptionOne(!noteDescriptionOne);
  }

  const answerTwo = () => {
      setIconTwoSelected(!iconTwoSelected);
      setNoteDescriptionTwo(!noteDescriptionTwo);
  }

  const answerThree = () => {
      setIconThreeSelected(!iconThreeSelected);
      setNoteDescriptionThree(!noteDescriptionThree);
  }

  const answerFour = () => {
      setIconFourSelected(!iconFourSelected);
      setNoteDescriptionFour(!noteDescriptionFour);
  }

  const answerFive = () => {
      setIconFiveSelected(!iconFiveSelected);
      setNoteDescriptionFive(!noteDescriptionFive);
  }


  //Descirtivo das notas
  const noteOne = () => {
      return (
          <View style={styles.commentBox}>
              <Text style={styles.h4}>Descrição da nota</Text>
              <Text style={styles.BodyTextSecondary}> descrição da nota 1</Text>
          </View>
      )
  }

  const noteTwo = () => {
      return (
          <View style={styles.commentBox}>
              <Text style={styles.h4}>Descrição da nota</Text>
              <Text style={styles.BodyTextSecondary}> descrição da nota 2</Text>
          </View>
      )
  }
  const noteThree = () => {
      return (
          <View style={styles.commentBox}>
              <Text style={styles.h4}>Descrição da nota</Text>
              <Text style={styles.BodyTextSecondary}> descrição da nota 3</Text>
          </View>
      )
  }
  const noteFour = () => {
      return (
          <View style={styles.commentBox}>
              <Text style={styles.h4}>Descrição da nota</Text>
              <Text style={styles.BodyTextSecondary}> descrição da nota 4</Text>
          </View>
      )
  }
  const noteFive = () => {
      return (
          <View style={styles.commentBox}>
              <Text style={styles.h4}>Descrição da nota</Text>
              <Text style={styles.BodyTextSecondary}> descrição da nota 5</Text>
          </View>
      )
  }




  return (
      <ScrollView>
          <View style={{ backgroundColor: '#fff' }}>
              <View style={styles.container}>
                  <View>
                      <Text style={styles.h2}> Limpeza</Text>
                  </View>
                  <FlatList
                      keyExtractor={(item) => item.id}
                      data={formPadronizacao}
                      renderItem={({ item }) => (
                          <Question
                              id={item.id}
                              question={item.question}
                              selected={!!selected.get(item.id)}
                              onSelect={onSelect}
                          />
                      )}
                  />
                  <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("Resultado")}>
                      <Text style={styles.primaryButtonText}>Próximo</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </ScrollView>
  )


}