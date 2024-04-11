import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NewTodo } from './src/components/NewTodoForm';
import TodoList from './src/components/TodosList';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App: React.FC = () => {
  return (
        <Provider store={store}>
          <View style={styles.container}>
            <Text style={styles.title}>Todos</Text>
            <View style={styles.content}>
                <NewTodo />
                <TodoList />
            </View>
          </View>
        </Provider>
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

export default App;