import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {

  const [todos, setTodos] = useState([
    { text:'bygg en app', key: '1' },
    { text:'köp mjölk', key: '2' },
    { text:'tvätta bilen', key: '3' },
    { text:'vattna blommor', key: '4' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);

    });
  }

  const submitHandler = (text) => {
    
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
    });
    } else {
        Alert.alert('OOPSSS!!', ' Todos must be at least 4 chars long!', [
          {text: 'OK', onPress: () => console.log('alert closed')}
        ])

      }

    
  }
    return (
      <TouchableWithoutFeedback onPress={() =>  {
        Keyboard.dismiss();
        }}>

        <View style={styles.container}>
          <Header />
            <View style={styles.content}>
              <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                  <FlatList
                      data={todos}
                      renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler} />
                    )}
                />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFEFE',
    
  
  },
  content: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
