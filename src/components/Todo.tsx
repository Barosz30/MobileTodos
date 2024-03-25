import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '../types/Todo';
import { useDeleteTodoMutation, useGetTodosQuery } from '../store/apiSlice/apiSlice';

import useTodos from '../utils/updateTodos';

type Props = {
  todo: Todo;
};

export const SingleTodo: React.FC<Props> = ({ todo }) => {
  const { title, completed } = todo;
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(title);
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const { updateTodos }  = useTodos();

  const handeleClickOnTodo = () => {
    setIsEditable(true);
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodoMutation(id);
      updateTodos();

    } catch (error) {
      
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <View style={styles.todo}>
      
      
      {!isEditable && (
        <>
        <TouchableOpacity onPress={handeleClickOnTodo}>
          <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>
            {title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTodo(todo.id)}>
          <Text style={styles.deleteTodo}>×</Text>
        </TouchableOpacity>
      </>
      )}

      {isEditable && (
        <TextInput
          value={value}
          onChangeText={setValue}
          onBlur={() => setIsEditable(false)}
          autoFocus={true}
        />
      )}
      
        
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#d3eaf2',
    borderRadius: 10,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  deleteTodo: {
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 10,
  }
});