import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useAddTodoMutation } from "../store/apiSlice/apiSlice";
import { Todo } from "../types/Todo";
import { USER_ID } from "../constans/constans";
import { useState } from "react";
import useTodos from "../utils/updateTodos";

export const NewTodo = () => {
  const [addTodoMutation] = useAddTodoMutation();
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const { updateTodos }  = useTodos();

  const handleAddTodo = async () => {
    if (newTodoTitle.trim() === '') {
      return; 
    }

    const newTodo: Omit<Todo, 'id'> = {
      userId: USER_ID,
      title: newTodoTitle,
      completed: false,
    };

    try {
      await addTodoMutation(newTodo);
      updateTodos();

    } catch (error) {
      console.error('Error adding todo:', error);
    }

    setNewTodoTitle('');
    
  };

    return (
        <View style={styles.header}>
        <TouchableOpacity />

        <TextInput
          style={styles.newTodoField}
          placeholder="What needs to be done?"
          value={newTodoTitle}
          onChangeText={(text) => setNewTodoTitle(text)}
          onSubmitEditing={handleAddTodo}
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    newTodoField: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: 'gray',
      paddingVertical: 10,
      paddingHorizontal: 10,
      fontSize: 16,
    },
  });