import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '../types/Todo';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../store/apiSlice/apiSlice';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import useTodos from '../utils/updateTodos';

type Props = {
  todo: Todo;
};

export const SingleTodo: React.FC<Props> = ({ todo }) => {
  const { title, completed, id } = todo;
  const [ isEditable, setIsEditable ] = useState(false);
  const [ titleValue, setTitleValue ] = useState(title);
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const { updateTodos }  = useTodos();
  const [updateTodo] = useUpdateTodoMutation();

  const [checkboxState, setCheckboxState] = useState(completed);

  const handeleClickOnTodo = () => {
    setIsEditable(true);
  };

  const handleDeleteTodo = async () => {
    try {
      await deleteTodoMutation(id);
      updateTodos();

    } catch (error) {
      
      console.error('Error deleting todo:', error);
    }
  };

  const handleBlur = async () => {
    try {
      setIsEditable(false);
      await updateTodo({ id, data: { title: titleValue.trim() }});
      updateTodos();

    } catch (error) {
      
      console.error('Error updating todo title:', error);
    }
  };

  const handleCheckbox = async () => {
    try {
      const updatedCheckboxState = !checkboxState;
      setCheckboxState(updatedCheckboxState);

      await updateTodo({ id, data: { completed: updatedCheckboxState }});
      updateTodos();

    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  }

  return (
    <View style={styles.todo}>
      
      <BouncyCheckbox isChecked={checkboxState} onPress={() => handleCheckbox()} />
      {!isEditable && (
        <>
        <TouchableOpacity onPress={handeleClickOnTodo}>
          <Text style={{ textDecorationLine: checkboxState ? 'line-through' : 'none' }}>
            {titleValue}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTodo()}>
          <Text style={styles.deleteTodo}>×</Text>
        </TouchableOpacity>
      </>
      )}

      {isEditable && (
        <TextInput
        defaultValue={title}
        onChangeText={(value) => setTitleValue(value)}
        onEndEditing={() => handleBlur()}
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