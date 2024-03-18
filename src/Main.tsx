import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoList from './components/TodosList';
import Error from './components/Error';
import { NewTodo } from './components/NewTodoForm';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Todos</Text>
        <View style={styles.content}>
            <NewTodo />
            
            <TodoList />
        </View>
        <Error />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default Main;