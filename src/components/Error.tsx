import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodos } from '../context/TodosProvider';

const Error: React.FC = () => {
  const { errorMessage, setErrorMessage } = useTodos();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [errorMessage, setErrorMessage]);

  return (
    // Notification is shown in case of any error
    // Add the 'hidden' style to hide the message smoothly
    <View style={[styles.notification, errorMessage ? null : styles.hidden]}>
      <TouchableOpacity onPress={() => setErrorMessage(null)}>
        <Text style={styles.delete}>×</Text>
      </TouchableOpacity>
      <Text>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hidden: {
    display: 'none',
  },
  delete: {
    color: 'white',
    marginRight: 5,
  },
});

export default Error;