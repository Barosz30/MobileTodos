import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export const NewTodo = () => {
    return (
        <View style={styles.header}>
        {/* this buttons is active only if there are some active todos */}
        <TouchableOpacity
          style={styles.toggleAllButton}
          onPress={() => {}}
          // Add your logic for handling active todos
        />

        {/* Add a todo on form submit */}
        <TextInput
          style={styles.newTodoField}
          placeholder="What needs to be done?"
          // Add your logic for handling new todos
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
    toggleAllButton: {
      // Add your styles for the toggle all button
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