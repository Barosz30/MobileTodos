import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Error: React.FC<{errorMessage: string}> = ({errorMessage}) => {
  return (
    <View style={[styles.notification, errorMessage ? null : styles.hidden]}>
      <TouchableOpacity>
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