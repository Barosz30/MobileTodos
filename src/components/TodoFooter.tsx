import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodos } from '../context/TodosProvider';
import { FilterBy } from '../types/filter';

const TodoFooter: React.FC = () => {
  const { filter, setFilter, counter } = useTodos();

  return (
    <View style={styles.footer} data-cy="Footer">
      <Text style={styles.todoCount} data-cy="TodosCounter">
        {counter} items left
      </Text>

      <View style={styles.filter} data-cy="Filter">
        <TouchableOpacity
          style={filter === FilterBy.All ? styles.selectedFilterLink : styles.filterLink}
          onPress={() => setFilter(FilterBy.All)}
          data-cy="FilterLinkAll"
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={filter === FilterBy.Active ? styles.selectedFilterLink : styles.filterLink}
          onPress={() => setFilter(FilterBy.Active)}
          data-cy="FilterLinkActive"
        >
          <Text>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={filter === FilterBy.Completed ? styles.selectedFilterLink : styles.filterLink}
          onPress={() => setFilter(FilterBy.Completed)}
          data-cy="FilterLinkCompleted"
        >
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* don't show this button if there are no completed todos */}
      {/* TODO: Implement the Clear completed button */}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  todoCount: {
    fontSize: 16,
  },
  filter: {
    flexDirection: 'row',
  },
  filterLink: {
    marginHorizontal: 5,
  },
  selectedFilterLink: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default TodoFooter;