import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './../components/Header.js';
import CustomButton from './../components/CustomButton.js';
import { AntDesign } from '@expo/vector-icons';
import CustomTextInput from '../components/CustomTextInput.js';

export default function TodoScreen(props) {

  // [
  //   { id: '', name, ""},
  //   { id: '', name, ""},
  //   { id: '', name, ""},
  //   { id: '', name, ""},
  //   { id: '', name, ""},
  //   { id: '', name, ""},
  // ]

  const [TodoScreen, setTodoScreen] = useState("");
  const [TodoScreens, setTodoScreens] = useState(
    [
      { id: '1', name: "TodoScreen 1"},
      { id: '2', name: "TodoScreen 2"},
      { id: '3', name: "TodoScreen 3"},
    ]
  );

  const addTodoScreen = () => {

    if(TodoScreen === "") {
      Alert.alert('Information', "Veuillez saisir une tâche svp!");
      return;
    }

    const newTodoScreen = { id: TodoScreens.length + 1, name: TodoScreen };

    setTodoScreens( currentTodoScreens => [newTodoScreen, ...currentTodoScreens]);
    setTodoScreen("");

  }

  const deleteTodoScreen = (item) => {
    
    Alert.alert(
      'Suppression', 
      "Êtes-vous de vouloir supprimer " + item.name,
      [
        {
          text: "Oui",
          onPress: () => {
            setTodoScreens( currentTodoScreens => currentTodoScreens.filter((el) => el.id !== item.id));
          }
        },
        {
          text: "Annuler",
        }
      ]
    );
  } 

  return (
    <View style={styles.container}>
      <Header isLogged={props.isLogged} logout={props.logoutUser} title={"Todo"} />

      <View style={styles.inputblock}>
        <CustomTextInput 
          placeholder='Saisissez une tâche à faire'
          value={TodoScreen}
          onChangeText={(text) => setTodoScreen(text)}
        />        
      </View>

      <View style={[styles.inputblock, styles.btnBlock]}>
        <CustomButton title='Ajouter' onPress={ addTodoScreen } />
      </View>


      <FlatList 
        data={TodoScreens}
        renderItem={({item}) => (
          <View style={styles.TodoScreenBlock}>
            <Text style={styles.TodoScreenText}>{item.name}</Text>

            <Pressable onPress={ () => deleteTodoScreen(item) }>
              <AntDesign name="closecircleo" size={24} color="red" />
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputblock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnBlock: {
    marginTop: 10,
    marginBottom: 20,
  },
  textInputRender: {
    marginVertical: 20,
  }, 
  TodoScreenBlock: {
    backgroundColor: 'skyblue',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  TodoScreenText: {
    fontWeight: 'bold',
    flexGrow: 1,
  }
});
